var express = require("express");
var router = express.Router();

// Recruiment Routes
router.get("/manager-assistant", (req, res, next) => {
  res.render("recruitment/manager-assistant", { i18n: res });
});

router.get("/cad", (req, res, next) => {
  res.render("recruitment/cad", { i18n: res });
});

router.get("/translator", (req, res, next) => {
  res.render("recruitment/translator", { i18n: res });
});

module.exports = router;
