//code to scrape the file use cheerio for this
//require request and cheerio

var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
  request("https://www.nytimes.com", function(error, response, html) {
    var $ = cheerio.load(html);
    var results = [];
    $("h2.story-heading").each(function(i, element) {
      var title = $(element).text();
      var link = $(element)
        .children()
        .attr("href");
      results.push({
        title: title,
        link: link
      });
    });

    $("figure.rollover").each(function(i, element) {
      var imgLink = $(element)
        .find("a")
        .find("img")
        .attr("data-srcset")
        .split(",")[0]
        .split(" ")[0];
      results.push({
        link: imgLink
      });
    });

    console.log(results);
  });
};
module.exports = scrape;
