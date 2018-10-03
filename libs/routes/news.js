var express = require("express");
var router = express.Router();

// News Routes
router.get("/product-quality-symposium", (req, res, next) => {
  res.render("news/product-quality-symposium", { i18n: res });
});

router.get("/our-company-is-in-the-new-modernization-factory", (req, res, next) => {
  res.render("news/our-company-is-in-the-new-modernization-factory", { i18n: res });
});

router.get("/our-new-factory-in-vn-is-in-production", (req, res, next) => {
  res.render("news/our-new-factory-in-vn-is-in-production", { i18n: res });
});

router.get('/year-end-party-2017', (req, res, next) => {
  res.render('news/year-end-party-2017', { i18n: res })
})

router.get('/new-year-opening-2018', (req, res, next) => {
  res.render('news/new-year-opening-2018', { i18n: res })
})

module.exports = router;
