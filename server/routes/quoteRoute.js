var express = require("express");
var router = express.Router();
var quoteController = require("../controllers/quoteController");
router.get("/quotes", quoteController.get_all_quotes);

module.exports = router;