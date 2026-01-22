🚀 AI-Powered Job Tracker with Smart Matching

A full-stack web application that helps users discover jobs, match them intelligently with their resume using AI, and track application status in one place.

This project focuses on real product thinking, clean architecture, and practical AI usage, not gimmicks.

🔗 https://ai-job-tracer.vercel.app/

📦 GitHub Repository

👉 This repository

🧠 Problem Statement

Job seekers often:

Apply to many jobs without knowing how well they match

Lose track of applications

Waste time reading irrelevant postings

This application solves that by:

Automatically matching jobs with a user’s resume

Showing clear match scores with explanations

Tracking application progress in a simple dashboard



✨ Features
1️⃣ Job Feed & Filters

Fetches jobs from an external API (mocked for demo)

Displays job cards with:

Title

Company

Location

Job type

Description

Filters:

Job title

Location

Match score (High / Medium / All)



2️⃣ Resume Upload

User uploads one resume (TXT format)

Resume text is stored in backend memory

Resume can be replaced anytime

TXT format is used to keep parsing simple and reliable for this demo.



3️⃣ AI-Powered Job Matching ⭐

Each job is compared against the uploaded resume

AI returns:

Match score (0–100%)

Reasons for match

Match score is shown using color badges:

🟢 Green: >70%

🟡 Yellow: 40–70%

⚪ Gray: <40%



4️⃣ Smart Application Tracking ⭐

Clicking Apply opens a confirmation popup

On confirmation:

Job is saved as Applied

Timestamp is recorded

User can update status:

Applied → Interview → Rejected / Offer

All applications are shown in a dashboard



5️⃣ AI Sidebar Assistant

A simple AI-assisted sidebar that:

Answers queries like:

react jobs

remote jobs

highest match

Filters jobs intelligently

Always returns useful suggestions (never empty)

This is implemented as AI-assisted filtering, not fake chat responses.



🏗️ Architecture
High-Level Flow
Frontend (React)
   |
   |  REST API calls
   v
Backend (Node.js + Fastify)
   |
   |  Job data + Resume text
   |  AI Matching Service
   v
OpenAI API



Frontend Responsibilities

UI rendering

Resume upload

Filters & job display

Apply popup

AI sidebar interaction

Backend Responsibilities

Job fetching

Resume storage (in-memory)

AI matching logic

Application tracking



🧠 AI Matching Logic (Explained Simply)

Resume text and job description are sent to AI

AI is prompted to:

Return a match score (0–100)

Explain why it matched

AI response is forced into strict JSON

Frontend displays score + explanation

Why this approach?

Explainable results (not a black box)

Consistent output

Easy to scale later



⚙️ Tech Stack
Frontend

React (Vite)

Plain CSS (no UI frameworks)

Axios

Backend

Node.js

Fastify

OpenAI API

Storage

In-memory (for demo simplicity)



▶️ How to Run Locally
Backend
cd backend
npm install
npm run dev


Runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Runs on:

http://localhost:5173

🔐 Environment Variables
Backend (.env.example)
PORT=5000
OPENAI_API_KEY=your_key_here

Frontend (.env.example)
VITE_API_BASE_URL=http://localhost:5000


⚠️ No secrets are committed to the repository.



🧪 Edge Cases Handled

Resume not uploaded → UI shows friendly message

Backend returns error → frontend does not crash

Filters removing all jobs → clear feedback shown

AI returns unexpected output → defensive checks applied



📈 Scalability Considerations

If scaled to 10,000 users:

Resume + application data would move to a database

Redis could cache AI match results

Job matching could be batched instead of per request

AI calls could be rate-limited and queued



⚖️ Trade-offs & Limitations
Trade-offs

TXT resume used instead of PDF (simplicity > complexity)

Mock job API instead of live Adzuna (reliability for demo)

What I’d Improve With More Time

Proper PDF resume parsing

Real external job API integration

Semantic vector-based matching

Authentication & user accounts
