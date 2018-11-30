"use strict";

const express = require("express");
const app = new express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const i18n = require("i18n");
const port = process.env.PORT || 3000;
const path = require("path");
const routes = require("./libs/routes/routes.js");
const products_routes = require("./libs/routes/products.js");
const news_routes = require("./libs/routes/news.js");
const recruitment_routes = require("./libs/routes/recruitment.js");
const csr_routes = require("./libs/routes/csr");
const about_routes = require("./libs/routes/about");
const compression = require("compression");
const helmet = require("helmet");

//configure i18n
i18n.configure({
  locales: ["vi", "en", "ch"],
  directory: __dirname + "/locales",
  cookie: "i18n"
});

app.use(cookieParser("henglivn"));
app.use(
  session({
    secret: "henglivn",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

app.use(i18n.init);

// gzip compression middleware
app.use(compression());

// helmet middleware
app.use(helmet());

// ejs template middleware
app.set("view engine", "ejs");
app.set("views", "views");

app.use('/public', express.static(path.join(__dirname, "/public")));
//app.use('/public', express.static(__dirname + "/public"));

// Configure routes
app.use("/", routes);
app.use("/products", products_routes);
app.use("/news", news_routes);
app.use("/recruitment", recruitment_routes);
app.use("/csr", csr_routes);
app.use("/about", about_routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

app.listen(port);
