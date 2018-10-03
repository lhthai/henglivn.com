var express = require("express");
var router = express.Router();

// Main Pages Routes
router.get("/", (req, res, next) => {
  res.render("index", { i18n: res });
});

// i18n Handling langluages
router.get("/en", (req, res, next) => {
  res.cookie("i18n", "en");
  res.redirect("/");
});

router.get("/vi", (req, res, next) => {
  res.cookie("i18n", "vi");
  res.redirect("/");
});

router.get("/ch", (req, res, next) => {
  res.cookie("i18n", "ch");
  res.redirect("/");
});

// Routes for main components
router.get("/about", (req, res, next) => {
  res.render("about", { i18n: res });
});

router.get("/services", (req, res, next) => {
  res.render("services", { i18n: res });
});

router.get("/products", (req, res, next) => {
  res.render("products", { i18n: res });
});

router.get("/news", (req, res, next) => {
  res.render("news", { i18n: res });
});

router.get("/contact", (req, res, next) => {
  res.render("contact", { i18n: res });
});

router.get("/recruitment", (req, res, next) => {
  res.render("recruitment", { i18n: res });
});

// Adding sitemap for google crawler
router.get("/sitemap", (req, res, next) => {
  res.render("sitemap");
});

module.exports = router;
