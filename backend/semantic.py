import re
import numpy as np
from fastembed import TextEmbedding

_model = TextEmbedding("sentence-transformers/all-MiniLM-L6-v2")

KEEP_WORDS = ("responsibilit", "requirement", "qualification", "skill",
              "nice to have", "preferred", "must have", "what you")
DROP_WORDS = ("about", "benefit", "perk", "we offer", "why join",
              "compensation", "equal opportunity")
BARE_HEADERS = {"responsibilities", "requirements", "qualifications", "skills",
                "nice to have", "benefits", "perks", "about us", "about the company"}


def _embed(texts):
    vecs = np.array(list(_model.embed(texts)))
    norms = np.linalg.norm(vecs, axis=1, keepdims=True)
    return vecs / np.clip(norms, 1e-12, None)  # normalized, so dot product = cosine similarity


def merge_wrapped_lines(text):
    merged = []
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            continue
        starts_new = line.startswith(("•", "-", "*", "–"))
        prev = merged[-1] if merged else ""
        wrapped = (
            prev
            and not starts_new
            and not prev.endswith((".", ":", ";"))
            and (len(prev) >= 90 or line[0].islower())
        )
        if wrapped:
            merged[-1] = prev + " " + line
        else:
            merged.append(line)
    return "\n".join(merged)


def split_lines(text, min_chars=20):
    parts = re.split(r"[\n\r•]+", text)
    return [p.strip(" -*\t") for p in parts if len(p.strip()) >= min_chars]


def _header_type(line):
    low = line.lower().strip(" :-*")
    words = line.split()
    is_header = (line.rstrip().endswith(":") and len(words) <= 6) or low in BARE_HEADERS
    if not is_header:
        return None
    if any(w in low for w in KEEP_WORDS):
        return "keep"
    if any(w in low for w in DROP_WORDS):
        return "drop"
    return None


def requirement_lines(jd_text, min_chars=20):
    lines = [l.strip(" -*\t") for l in re.split(r"[\n\r•]+", jd_text) if l.strip(" -*\t")]
    has_keep = any(_header_type(l) == "keep" for l in lines)
    keep = not has_keep
    result = []
    for line in lines:
        kind = _header_type(line)
        if kind == "keep":
            keep = True
            continue
        if kind == "drop":
            keep = False
            continue
        if keep and len(line) >= min_chars:
            result.append(line)
    return result


def semantic_analysis(resume_text, jd_text, threshold=0.35, top_n=5):
    resume_chunks = split_lines(merge_wrapped_lines(resume_text))
    jd_chunks = requirement_lines(jd_text) or split_lines(jd_text)

    if not resume_chunks or not jd_chunks:
        return {
            "semantic_similarity_score": 0.0,
            "requirement_coverage": 0.0,
            "weakest_requirements": [],
        }

    resume_emb = _embed(resume_chunks)
    jd_emb = _embed(jd_chunks)

    sims = jd_emb @ resume_emb.T          # rows = JD lines, cols = resume lines
    best_idx = sims.argmax(axis=1).tolist()
    best_vals = sims.max(axis=1).tolist()

    avg = sum(best_vals) / len(best_vals)
    coverage = sum(v >= threshold for v in best_vals) / len(best_vals)

    weak_order = sorted(
        (i for i in range(len(jd_chunks)) if best_vals[i] < threshold),
        key=lambda i: best_vals[i],
    )[:top_n]

    weakest = [
        {
            "requirement": jd_chunks[i],
            "closest_resume_line": resume_chunks[best_idx[i]],
            "similarity": round(best_vals[i] * 100, 1),
        }
        for i in weak_order
    ]

    return {
        "semantic_similarity_score": round(avg * 100, 1),
        "requirement_coverage": round(coverage * 100, 1),
        "weakest_requirements": weakest,
    }