const express = require('express');
const journalRoute = require("./journal.route");
const router = express.Router()

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is running
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200))

router.use('/journal', journalRoute)

module.exports = router;