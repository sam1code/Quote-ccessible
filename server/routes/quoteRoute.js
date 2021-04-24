var express = require("express");
var router = express.Router();
var quoteController = require("../controllers/quoteController");
var auth = require("../middleware/auth")();
router.post("/quotes/create", auth.authenticate(), quoteController.insert_quote)
router.post("/quotes/update/:quoteId", auth.authenticate(), quoteController.update_quote)
router.post("/quotes/delete/:quoteId", auth.authenticate(), quoteController.delete_quote)
router.get("/quotes", quoteController.get_all_quotes);

module.exports = router;