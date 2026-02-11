# 👁️ Eye Tracking Communication System

A full-stack web application that enables communication using eye-tracking technology.

This project includes:

* 🌐 Frontend (Client)
* ⚙️ Backend API (Server)
* 🔌 REST communication between both
* 🩺 Health monitoring endpoint

---

## 🚀 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* (React / Bootstrap if added later)

### Backend

* Node.js
* Express.js
* CORS
* dotenv

---

## 📁 Project Structure

```
EyeTrackingCommunicationSystem/
│
├── client/              → Frontend application (UI)
│
├── server/              → Backend API
│   ├── controllers/     → Business logic
│   ├── routes/          → API endpoints
│   ├── index.js         → Server entry point
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

## 🧠 Architecture (How it Works)

### Request Flow

```
Frontend → API Route → Controller → Response
```

Example:

```
GET /api/health
   ↓
routes/health.js
   ↓
controllers/healthController.js
   ↓
JSON response
```

---

## ⚙️ Backend Details

### MVC Pattern Used

We follow separation of concerns:

* Routes → define endpoints
* Controllers → contain logic
* index.js → server setup

This keeps the code:

* clean
* scalable
* production-ready

---

## 🔌 API Endpoints

### Health Check

```
GET /api/health
```

Response:

```json
{
  "status": "ok",
  "message": "Backend running successfully"
}
```

### Why Health Route?

Used for:

* server uptime checks
* deployment monitoring
* debugging
* DevOps health checks

---

## 🛠️ Setup Instructions

### 1. Clone repo

```
git clone <repo-url>
cd EyeTrackingCommunicationSystem
```

---

### 2. Install backend dependencies

```
cd server
npm install
```

---

### 3. Run backend

```
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

### 4. Run frontend

```
cd client
npm install
npm start
```

---

## 🌍 Environment Variables (server/.env)

```
PORT=5000
```

---

## ✨ Features Implemented

✅ Express backend setup
✅ MVC architecture
✅ CORS enabled
✅ Health monitoring route
✅ Clean folder structure
✅ Frontend + Backend integration

---

## 📌 Future Improvements

* Eye tracking integration
* Authentication
* Database support
* Real-time communication
* Deployment (Render/Vercel)

---

## 👩‍💻 Author

Built with ❤️ using Node.js & JavaScript
