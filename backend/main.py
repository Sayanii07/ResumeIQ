from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber, requests, os, json
from docx import Document
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer, util
load_dotenv()
app = FastAPI()

embedder = SentenceTransformer('all-MiniLM-L6-v2')


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def extract_pdf_text(file):
    with pdfplumber.open(file.file) as pdf:
        return "\n".join(page.extract_text() or "" for page in pdf.pages)

def extract_docx_text(file):
    doc = Document(file.file)
    return "\n".join(para.text for para in doc.paragraphs if para.text.strip())

def compute_semantic_score(resume_text, jd_text):
    embeddings = embedder.encode([resume_text, jd_text], convert_to_tensor=True)
    similarity = util.cos_sim(embeddings[0], embeddings[1]).item()
    return round(similarity * 100, 1)


@app.get("/")
def root():
    return {"status": "ResumeIQ API is running"}


@app.post("/analyze")
async def analyze(resume: UploadFile, job_description: str = Form(...)):
    filename = resume.filename.lower()

    if filename.endswith(".pdf"):
        resume_text = extract_pdf_text(resume)
    elif filename.endswith(".docx"):
        resume_text = extract_docx_text(resume)
    else:
        return {"error": "Unsupported file type. Please upload a PDF or DOCX file."}

    if not resume_text.strip():
        return {"error": "Couldn't read any text from this file. Try a different resume file."}

    prompt = f"""Compare this RESUME with this JOB DESCRIPTION.
Return ONLY valid JSON with keys: match_score (0-100 integer), matched_skills (array), missing_skills (array), summary (string), suggestions (array).

RESUME:
{resume_text}

JOB DESCRIPTION:
{job_description}"""

    r = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={"Authorization": f"Bearer {os.getenv('GROQ_API_KEY')}"},
        json={
            "model": "openai/gpt-oss-20b",
            "messages": [{"role": "user", "content": prompt}],
            "response_format": {"type": "json_object"}
        }
    )
    response_json = r.json()
    print("GROQ RESPONSE:", response_json)  # debug line

    if "choices" not in response_json:
        return {"error": "Groq API failed", "details": response_json}

    ai_result = json.loads(response_json["choices"][0]["message"]["content"])
    semantic_score = compute_semantic_score(resume_text, job_description)

    return {
        "ai_match_score": ai_result["match_score"],
        "semantic_similarity_score": semantic_score,
        "matched_skills": ai_result["matched_skills"],
        "missing_skills": ai_result["missing_skills"],
        "summary": ai_result["summary"],
        "suggestions": ai_result["suggestions"],
    }