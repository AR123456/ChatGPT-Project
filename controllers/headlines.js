//cruds go here 
//scrape script file 
var scrape = require("../scripts/scrape");
//fix up the date file 
var makeDate = require("../scripts/date");
// use the mongoose models for headline and note
var Headline = require("../models/Headline");

 //this is functionality to delete and save articles portable to the rest of the program
moduel.exports = {
 //fetch runs the scrape function also inserts articles into headline collection in the mongo database 

    fetch: function (cb) {
//when fetch is run ,place call back into the function then run scrape function 
        scrape(function(data){
            //when running scrape set data to be called articles
           
        });
    },
    //delete property so articles can be deleted
    delete: function(query,cb){
       
    },
    //the function to get the articles out of the collection
    get: function(query,cb){
        //find all the headines
      
       },
       //function to update the articles 
       update: function(query,cb){
           //update scraped articles with the relevant ID and update any information that is passed to the article as well. 
           
       }

}
