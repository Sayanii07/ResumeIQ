import re
from sentence_transformers import SentenceTransformer, util

_model = SentenceTransformer("all-MiniLM-L6-v2")


def split_lines(text, min_chars=20):
    parts = re.split(r"[\n\r•]+", text)
    return [p.strip(" -*\t") for p in parts if len(p.strip()) >= min_chars]


def semantic_analysis(resume_text, jd_text, threshold=0.35, top_n=3):
    resume_chunks = split_lines(resume_text)
    jd_chunks = split_lines(jd_text)

    if not resume_chunks or not jd_chunks:
        return {
            "semantic_similarity_score": 0.0,
            "requirement_coverage": 0.0,
            "weakest_requirements": [],
        }

    resume_emb = _model.encode(resume_chunks, convert_to_tensor=True)
    jd_emb = _model.encode(jd_chunks, convert_to_tensor=True)

    sims = util.cos_sim(jd_emb, resume_emb)  # rows = JD lines, cols = resume lines
    best_vals, best_idx = sims.max(dim=1)
    best_vals = best_vals.tolist()
    best_idx = best_idx.tolist()

    avg = sum(best_vals) / len(best_vals)
    coverage = sum(v >= threshold for v in best_vals) / len(best_vals)

    weakest_order = sorted(range(len(jd_chunks)), key=lambda i: best_vals[i])[:top_n]
    weakest = [
        {
            "requirement": jd_chunks[i],
            "closest_resume_line": resume_chunks[best_idx[i]],
            "similarity": round(best_vals[i] * 100, 1),
        }
        for i in weakest_order
    ]

    return {
        "semantic_similarity_score": round(avg * 100, 1),
        "requirement_coverage": round(coverage * 100, 1),
        "weakest_requirements": weakest,
    }