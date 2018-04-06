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
            var articles = data;
            // for each article run the make date functionto insert the date  and set articles saved to false
            for (let i = 0; i < articles.length; i++) {
                articles[i].date =  makeDate();
                articles[i].saved = false;
           }
           //then run this mongo ( not mongoose) function 
           //insert articles into the headline collection 
           //ordered is false so they wont be ordered 
           Headline.collection.insertMany(articles,{ordered:false}, function(err, docs){
               //this is so if there is an error it is not thrown and process stopped, it skips tha tone and continues to the next articel until done. 
               //callback will return any errors in the docs
               cb(err, docs);
           });
        });
    },
    //delete property so articles can be deleted
    delete: function(query,cb){
        //when the function is run whatever headlne was queried will be removed 
        Hedline.remove(query, cb);
    },
    //the function to get the articles out of the collection
    get: function(query,cb){
        //find all the headines
        Headline.find(query)
        //sort them most recent to least recent 
        .sort({
            _id: -1
        })
        //pass all of the documents to the call back function 
        .exec(function(err,doc){
            cb(doc);
        });
       },
       //function to update the articles 
       update: function(query,cb){
           //update scraped articles with the relevant ID and update any information that is passed to the article as well. 
           Headline.update({_id: query._id},{
               $set: query
           }, {},cb);
       }

}
