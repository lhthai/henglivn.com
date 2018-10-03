var express = require("express");
var router = express.Router();

// Products Routes
router.get("/cb", (req, res, next) => {
  res.render("products/cb", { i18n: res });
});

router.get("/cnfj", (req, res, next) => {
  res.render("products/cnfj", { i18n: res });
});

router.get("/evf", (req, res, next) => {
  res.render("products/evf", { i18n: res });
});

router.get("/mf", (req, res, next) => {
  res.render("products/mf", { i18n: res });
});

router.get("/fa", (req, res, next) => {
  res.render("products/fa", { i18n: res });
});

router.get("/gel", (req, res, next) => {
  res.render("products/gel", { i18n: res });
});

router.get("/gfm", (req, res, next) => {
  res.render("products/gfm", { i18n: res });
});

router.get("/hr", (req, res, next) => {
  res.render("products/hr", { i18n: res });
});

module.exports = router;
