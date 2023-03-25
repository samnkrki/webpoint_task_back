const express = require("express");
const journalController = require("./journal.controller");
const router = express.Router();

router.route("").get(journalController.list).post(journalController.add);
module.exports = router;