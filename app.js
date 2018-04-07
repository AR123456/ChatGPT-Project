const request = require('request');
const cheerio = require('cheerio');
const $ = require('cheerio');
//a working cheerio request string 
request ("https://www.nytimes.com", function(error,response,html){
    var $ = cheerio.load(html);
    var results = [];
    $("h2.story-heading").each(function(i, element){
        var title = $(element).text();
        var link = $(element).children().attr("href");
        results.push({
            title:title,
            link: link
        });
    });

    // $("figure.rollover").each(function(i, element){
        
    //     var imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];
    //     results.push({       
    //         link: imgLink
    //     });
    // });


console.log(results);

} );