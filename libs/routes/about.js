var express = require("express");
var router = express.Router();

// About Routes
router.get("/introduction", (req, res, next) => {
    res.render("about/introduction", { i18n: res });
  });
  
  router.get("/timeline", (req, res, next) => {
    res.render("about/timeline", { i18n: res });
  });
  
  module.exports = router;