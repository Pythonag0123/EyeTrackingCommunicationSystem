# Eye Tracking Communication System – Backend

## Overview
This is the backend server built using Node.js and Express.
It handles API requests and provides endpoints for the application.

Currently includes:
- Health check endpoint

---

## Tech Stack
- Node.js
- Express.js
- CORS
- dotenv

---

## Folder Structure

Server/
│
├── controllers/        → business logic
├── routes/             → API endpoints
├── index.js            → server entry point
├── .env                → environment variables
├── package.json

---

## How It Works

Request Flow:

Client → Route → Controller → Response

Example:
GET /api/health
→ routes/health.js
→ controllers/healthController.js
→ JSON response

---

## Setup

Install dependencies:

npm install

Run development server:

npm run dev

Run production server:

npm start

---

## API Endpoints

### Health Check
GET /api/health

Response:
{
  "status": "ok",
  "message": "Backend running successfully"
}

---

## Why Health Route?
Used for:
- server monitoring
- deployment checks
- uptime testing
