Fina-AI — Smart Finance Tracker with AI Receipt Scanning

Fina-AI is a full-stack finance management app that helps users track expenses by scanning receipts using AI.
The system extracts purchase details (items, total amount, tax, date, category, etc.) using Google Gemini Vision API, and automatically creates structured transactions.

🚀 Features
⭐ Receipt Scanning (AI Powered)

Upload or capture receipt images

AI extracts:

Store name

Date

Items list

Tax and total

Payment method

Converts it into a clean JSON transaction

⭐ Finance Dashboard

View all transactions

Filter by date/category

Auto-generated analytics (monthly expense graph, spending categories)

⭐ Authentication

Secure login using JWT / Firebase Auth

⭐ Tech Stack
Frontend

React + Next.js App Router

Tailwind CSS

ShadCN UI

Lucide Icons

Backend

Node.js + Express.js

Google Gemini API (Vision)

MongoDB (Mongoose)

Deployment

Frontend → Vercel

Backend + Database → Railway

📸 Receipt Scanning Flow

User clicks Scan Receipt

Mobile camera opens (using <input capture="environment">)

Image is uploaded to backend

Backend sends it to Gemini Vision API

Gemini returns structured JSON

Transaction is stored in DB

UI shows: “Receipt scanned successfully ✔️”

