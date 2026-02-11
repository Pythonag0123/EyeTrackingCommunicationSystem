/**
 * =========================================
 * Health Controller
 * -----------------------------------------
 * Purpose:
 *  - Contains business logic for health route
 *  - Separates logic from routes (MVC pattern)
 *
 * Why?
 *  - routes → only define endpoints
 *  - controllers → handle logic
 *  - keeps code clean and scalable
 * =========================================
 */

/**
 * @function getHealth
 * @desc Sends server health status
 * @route GET /api/health
 */
const getHealth = (req, res) => {
  res.json({
    status: "ok",
    message: "Backend running successfully"
  });
};

module.exports = { getHealth };
