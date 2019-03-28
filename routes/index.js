/**********************************/
/*       Java Script File         */
/*      Bhavna Pulliahgari        */
/*          300931671             */
/*       16th February, 2019      */
/**********************************/

/* JS File for Routing */
let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about page. */
router.get("/about", function(req, res, next) {
  res.render("about", { title: "About" });
});

/* GET projects page. */
router.get("/projects", function(req, res, next) {
  res.render("projects", { title: "Projects" });
});

/* GET services page. */
router.get("/services", function(req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET contact page. */
router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
