//for node server and routes
//todo change to const when app working so const dosent break anything
var express = require("express");
// other requ may go into another file
var bodyParser = require("body-parser");
// var logger = require("morgan");
// putting mongoose in the Headline.js model
var mongoose = require("mongoose");

var request = require("request");
var expresshandlebars = require("express-handlebars");
// Our scraping tools- thiss will go in the scrape.js file along with request package
var cheerio = require("cheerio");
//TODO From oldapp.js Scaper file do I need - looks like no it is declared below
//const $ = require('cheerio');

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// express router
var router = express.Router();

//require routesjs fill to pass router object
require("./config/routes")(router);

// Public folder is the static directory
app.use(express.static(__dirname + "/public"));

//use handlebars
app.engine(
  "handlebars",
  expresshandlebars({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//using body parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Configure middleware as express
app.use(router);

//if deployed use deployed db , other wise use the local mongoheadlines db
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadLines";
//connect mongoose to the db
mongoose.connect(db, function(error) {
  //log error if it happens
  if (error) {
    console.log(error);
  } else {
    console.log("mongoose connected");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

// Use morgan logger for logging requests
// app.use(logger("dev"));
