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
     headlinesController.fetch(function(err, docs){
       if(!docs || docs.insertedCount === 0){
           //show user one of the messages 
           res.json({
               message: "No new articles today. Check back tomorrow!"
           });
       }else{
           res.json({
               message: "Added" + docs.insertedCount +"new articles!"
           });
       }
   }) ;
});
//router to grab all of the headlines that are in the db
//when api/headlines is hit take in what the user requested and respond appropriatly 
router.get("/api/headlines", function (req,res){
    //query is the users request it starts off empty and if left that way everything will be returned in the json . If the user specifies a saved article or any specific parameter the query will be set to that. 
    var query ={};
    if (req.query.saved) {
        query = req.query;
    }
    headlinesController.get(query, function (data){
        res.json(data);
      });
    });
    // the delete article route - useing api headlines with an ID parameter at the end - the headline id that has already been associated 
    router.delete("/api/headlines/:id", function(res, res){
        //query is empty 
        var query ={};
        //setting query with request perams id 
        query._id = req.params.id;
        //then pass into the headlines delete controller
        headlinesController.delete(query, function (err,data){
            //respond with the data 
            res.json(data);
        });
    });
    //update headlines route - run the headlines controller update function on what ever the user send in the request
    router.patch("/api/headlines", function(req,res){
        headlinesController.update(req.body, function(err,data){
            res.json(data);
        });
    });
    //route to display notes to user- notes associated with the headline id 
    router.get("/api/notes/headline_id?", function(req, res){
        //initially the query is empty
        var query ={};
        //checking to see if user put in parameters
        if (req.params.headline_id) {
            //if so then set query id to the parameter set 
            query._id = req.params.headline_id;
        }
        //use the get function in the notes controller 
        notesController.get(query, function(err,data){
            //the response 
            res.json(data);
        });
    });
    //route to delete notes - on the id of the note specified 
    router.delete("/api/notes/:id",function(req,res){
        var query ={};
        //associate with what the user chose 
        query._id = req.params.id;
        //on notes controller run the delete based on what the user chose 
        notesController.delete(query,function(err,data){
            //pass the data to front in json 
            res.json(data);
        });
    });
    //route to post new note to articles 
    router.post("/api/notes", function (req, res){
        //run the note controller save function 
        notesController.save(req.body, function(data){
            //use what user sent as req.body, then returns data in json format to save on the front end 
            res.json(data);
        });
    });
}