/**
 * =========================================
 * Entry Point of Backend Server
 * -----------------------------------------
 * Responsibilities:
 *  - create Express app
 *  - load environment variables
 *  - setup middlewares
 *  - mount routes
 *  - start server
 * =========================================
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config(); // loads variables from .env

// import routes
const healthRoute = require("./routes/health");

// create express app
const app = express();


// ---------- Middlewares ----------

// allow frontend to call backend (CORS)
app.use(cors());

// parse JSON body from requests
app.use(express.json());


// ---------- Routes ----------

// mount health route
// full path becomes → /api/health
app.use("/api/health", healthRoute);


// ---------- Server Port ----------

// use env port if available, else default 5000
const PORT = process.env.PORT || 5000;


// ---------- Start Server ----------

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
