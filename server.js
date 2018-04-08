//for node server and routes
//todo change to const when app working so const dosent break anything
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var request = require("request");
var expresshandlebars = require("express-handlebars");
var cheerio = require("cheerio");

var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();
require("./config/routes")(router);
app.use(express.static(__dirname + "/public"));
app.engine(
  "handlebars",
  expresshandlebars({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(router);
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadLines";
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("mongoose connected");
  }
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
