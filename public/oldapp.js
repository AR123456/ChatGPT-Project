//this went into the new server.js file 
// const request = require('request');
// const cheerio = require('cheerio');
// const $ = require('cheerio');
//this gets replaced by axios
request ("https://www.nytimes.com", function(error,response,html){
//this gets replaced by (response.data)    
// var $ = cheerio.load(html);
// this gets replaced by var result ={}
    // var results = [];
    $("h2.story-heading").each(function(i, element){
        //this gets replaced my the new syntax 
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