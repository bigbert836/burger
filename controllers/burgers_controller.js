var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// redirect to burgers
router.get("/", function(req, res) {
  res.redirect("/burgers");
});
// get all burgers
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// add new burger
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// update burger
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;