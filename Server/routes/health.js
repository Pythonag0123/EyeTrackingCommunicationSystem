/**
 * =========================================
 * Health Routes
 * -----------------------------------------
 * Only defines API endpoints.
 * NO business logic here.
 *
 * Flow:
 * index.js → this route → controller
 * =========================================
 */

const router = require("express").Router();

// import controller logic
const { getHealth } = require("../controllers/healthcontroller");

// GET /api/health
router.get("/", getHealth);

module.exports = router;
