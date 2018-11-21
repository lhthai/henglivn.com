const express = require("express");
const router = express.Router();
const cb_series = require("../data/products").cb_data;
const evf_series=require('../data/products').evf_data;
const cnfj_series=require('../data/products').cnfj_data;
const fa_series=require('../data/products').fa_data;
const gel_series=require('../data/products').gel_data;
const gfm_series=require('../data/products').gfm_data;
const hr_series=require('../data/products').hr_data;

// Products Routes
router.get("/cb", (req, res, next) => {
  res.render("products/cb", { i18n: res, products: cb_series });
});

router.get("/cnfj", (req, res, next) => {
  res.render("products/cnfj", { i18n: res, products: cnfj_series });
});

router.get("/evf", (req, res, next) => {
  res.render("products/evf", { i18n: res, products: evf_series });
});

// router.get("/mf", (req, res, next) => {
//   res.render("products/mf", { i18n: res, products: mf });
// });

router.get("/fa", (req, res, next) => {
  res.render("products/fa", { i18n: res, products: fa_series });
});

router.get("/gel", (req, res, next) => {
  res.render("products/gel", { i18n: res, products: gel_series });
});

router.get("/gfm", (req, res, next) => {
  res.render("products/gfm", { i18n: res, products: gfm_series });
});

router.get("/hr", (req, res, next) => {
  res.render("products/hr", { i18n: res, products: hr_series });
});

module.exports = router;
