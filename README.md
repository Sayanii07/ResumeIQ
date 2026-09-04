# ResumeIQ — AI-Powered Resume & ATS Analyzer
### 🔗 [Live Demo](https://resumeiq-frontend-fkz8.onrender.com)

> Note: hosted on Render's free tier — if the app has been inactive, the first load may take 30–60 seconds while the backend wakes up.

ResumeIQ analyzes how well a resume matches a job description, the way an ATS (Applicant Tracking System) and a recruiter would. Upload a resume (PDF or DOCX), paste a job description, and get an instant match score, skill gap breakdown, and tailored improvement suggestions.

## Features
- 📄 Resume upload — supports PDF and DOCX
- 🎯 ATS match score out of 100
- ✅ Matched skills detection
- ❌ Missing skills detection
- 💡 AI-generated, tailored suggestions to improve resume-job fit
- ⚡ Fast, structured AI analysis via Groq's LLM API

## Tech Stack

**Backend**
- Python
- FastAPI
- pdfplumber (PDF text extraction)
- python-docx (DOCX text extraction)
- Groq API (LLM inference)

**Frontend**
- React (Vite)
- styled-components
- Javascript

## Running Locally

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install fastapi uvicorn python-multipart pdfplumber python-docx requests python-dotenv
```

Create a `.env` file inside `backend/`:

Run the server:
```bash
uvicorn main:app --reload
```
Backend runs at `http://127.0.0.1:8000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

## How It Works

1. User uploads a resume (PDF/DOCX) and pastes a job description
2. Backend extracts raw text from the resume file
3. Resume text + job description are sent to an LLM with a structured prompt
4. LLM returns a JSON analysis: match score, matched skills, missing skills, summary, and suggestions
5. Frontend renders the results in a clean, readable format

