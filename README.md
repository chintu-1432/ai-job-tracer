# 🚀 AI-Powered Job Tracker with Smart Matching

A full-stack web application that helps users discover jobs, intelligently match them with their resume using AI, and track application status in one place.

---

## 🔗 Live Demo
https://ai-job-tracer.vercel.app/

## 📦 GitHub Repository
https://github.com/chintu-1432/ai-job-tracer

---

## 🧠 Problem Statement

Job seekers often:
- Apply blindly without knowing fit
- Lose track of applications
- Waste time on irrelevant roles

This project solves that by:
- AI-based resume–job matching
- Clear match scores with explanations
- Simple application tracking dashboard

---

## ✨ Features

### 1️⃣ Job Feed & Filters
- Job cards with title, company, location, type, description
- Filters by:
  - Job title
  - Location
  - Match score (High / Medium / All)

### 2️⃣ Resume Upload
- Upload single resume (TXT format)
- Resume text stored in backend memory
- Replace anytime

### 3️⃣ AI-Powered Job Matching ⭐
- Resume compared with job description
- AI returns:
  - Match score (0–100%)
  - Match reasons
- Color-coded badges:
  - Green >70%
  - Yellow 40–70%
  - Gray <40%

### 4️⃣ Smart Application Tracking ⭐
- Apply confirmation popup
- Status tracking:
  - Applied → Interview → Rejected / Offer
- Dashboard view of applications

### 5️⃣ AI Sidebar Assistant
- Queries like:
  - react jobs
  - remote jobs
  - highest match
- Intelligent job suggestions

---

## 🏗️ Architecture

Frontend (React)
→ Backend (Node.js + Fastify)
→ AI Matching Service (OpenAI)

---

## 🧠 AI Matching Logic

1. Resume + job description sent to AI
2. AI returns JSON:
   - score
   - reasons
3. Frontend displays results clearly

Focus: explainable, reliable AI — not black box

---

## ⚙️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Plain CSS

### Backend
- Node.js
- Fastify
- OpenAI API

### Storage
- In-memory (demo)

---

## ▶️ Run Locally

### Backend
```bash
cd backend
npm install
npm run dev
```

Runs on http://localhost:5000

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:5173

---

## 🔐 Environment Variables

### Backend (.env.example)
```
PORT=5000
OPENAI_API_KEY=your_key_here
```

### Frontend (.env.example)
```
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📈 Scalability

- Database instead of memory
- Redis caching for AI scores
- Batched AI calls
- Auth + multi-user support

---

## ⚖️ Trade-offs

- TXT resume instead of PDF (simplicity)
- Mock job data for stability

Future improvements:
- PDF parsing
- Real job APIs
- Semantic AI matching
- Mobile-first UI

---

## ✅ Checklist

- Live link
- Public repo
- AI match scores
- Apply popup
- AI sidebar
- No secrets committed

---

## 🎯 Final Note

This is a realistic MVP focused on clarity, usability, and real-world logic.
