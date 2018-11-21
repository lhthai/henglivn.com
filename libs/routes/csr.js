var express = require("express");
var router = express.Router();

// CSR Routes
router.get("/year-end-party-2017", (req, res, next) => {
  res.render("csr/year-end-party-2017", { i18n: res });
});

router.get("/new-year-opening-2018", (req, res, next) => {
  res.render("csr/new-year-opening-2018", { i18n: res });
});

module.exports = router;
