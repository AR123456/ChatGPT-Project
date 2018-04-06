//cruds go here notes controller file 
// bring in the model and make date functions 
var Note = require("../models/Note");
var makeDate = require("../scripts/date");

moduel.exports = {
    //get to grab notes associated with articles 
    //no fetch here because we are not scraping that in the notes are entered by the user

    get: function (data, cb ){
        Note.find({
            _headlinedId: data._id
        }, cb);
    },
    //save takes data from user and the call back function
    save: function (data,cb){
        //create an object new note
        var newNote = {
            //the headline ID associated with the note being created
            _headlinedId: data._id,
            //the date created with the makeDate function created and made avalible using the module.export 
            data: makeDate(),
            //note text comes from the user
            noteText: date.noteText
        };
        //get note from user and create one that gets passed into the call back function
        Note.create(newNote, function (err,doc){
            if (err){
                console.log(err);
                }
                else{
                    console.log(doc);
                    //passing note into the call back function 
                    cd(doc);                   
                }
        });
    },
    //delete funciton to remove notes associated with the article if desired. 
    delete: function(data,cb ){
        Note.remove({
            //the note associated with the article 
        _id: data._id
        },cb);
    }
   
};