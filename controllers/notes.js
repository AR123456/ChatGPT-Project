//cruds go here notes controller file 
// bring in the model and make date functions 
var Note = require("../models/Note");
var makeDate = require("../scripts/date");

moduel.exports = {
    //get to grab notes associated with articles 
    //no fetch here because we are not scraping that in the notes are entered by the user

    get: function (data, cb ){
 ;
    },
    //save takes data from user and the call back function
    save: function (data,cb){
        //create an object new note
 
    },
    //delete funciton to remove notes associated with the article if desired. 
    delete: function(data,cb ){
     
    }
   
};