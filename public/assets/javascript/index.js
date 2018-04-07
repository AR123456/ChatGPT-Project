//this JS is for hte index page 
//routes will be here the routes will use the controlers 
//need scrape function from scripts folder
var scrape = require("../scripts/scrape");
//get headlines and notes controllers 
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router){
    // route renders homepage
    router.get("/", function(req,res){
        res.render("home");
    });
    // route renders the saved handlebars page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
// the api route to fetch the articles 
//when the route is hit run the api function - pass the request and get back the respons   req,res - request is to scrape and res is to insert a new unique headline 
    router.get("/api/fetch", function (req, res){
        //go to headlines controller and run fetch
 
});
//router to grab all of the headlines that are in the db
//when api/headlines is hit take in what the user requested and respond appropriatly 
router.get("/api/headlines", function (req,res){
    
;
    });
    // the delete article route - useing api headlines with an ID parameter at the end - the headline id that has already been associated 
    router.delete("/api/headlines/:id", function(res, res){
   
    });
    //update headlines route - 
    router.patch("/api/headlines", function(req,res){
       
    });
    //route to display notes to user- notes associated with the headline id 
    router.get("/api/notes/headline_id?", function(req, res){

    });
    //route to delete notes - on the id of the note specified 
    router.delete("/api/notes/:id",function(req,res){
  
    });
    //route to post new note to articles 
    router.post("/api/notes", function (req, res){
        //run the note controller save function 
    
    });
}