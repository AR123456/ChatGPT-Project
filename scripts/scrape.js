//code to scrape the file use cheerio for this
//require request and cheerio

var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
  request("https://www.nytimes.com", function(err, res, body) {
    var $ = cheerio.load(body);
    //the array that will be filled with the articles
    var articles = [];
    $(".theme-summary").each(function(i, element) {
      var head = $(this)
        .children(".story-heading")
        .text()
        .trim();
      var sum = $(this)
        .children(".summary")
        .text()
        .trim();
      //if there is a head and article neaten it, push to array and the when no more stop pushing
      if (head && sum) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat
        };
        articles.push(dataToAdd);
      }
    });
    cb(articles);
  });
};
module.exports = scrape;

// // ***** old code - why is the new code so different?  maybe the web site changed ?
// request ("https://www.nytimes.com", function(error,response,html){
//     var $ = cheerio.load(html);
//     var results = [];
//     $("h2.story-heading").each(function(i, element){
//         var title = $(element).text();
//         var link = $(element).children().attr("href");
//         results.push({
//             title:title,
//             link: link
//         });
//     });

//     // $("figure.rollover").each(function(i, element){

//     //     var imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];
//     //     results.push({
//     //         link: imgLink
//     //     });
//     // });

// console.log(results);

// } );
