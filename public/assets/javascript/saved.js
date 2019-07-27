//saved artcle js 
$(document).ready(function(){
    //ref to the article-container div for the dynamicaly generated content
    var articleContainer = $(".article-container");
    //event listner to dynamically generated delete articels, get article notes, saving articles notes and deleting artcle notes 
    $(document).on("click", ".btn.delete", handleArticleDelete);
    $(document).on("click", ".btn.notes", handleArticleNotes);
    $(document).on("click", ".btn.save", handleNoteSave);
    $(document).on("click", ".btn.note-delete", handleNoteDelete);
   //when page ready, run init Page function 
   initPage();
     //empty article container
   function initPage();{
   //empty article container
   articleContainer.empty();
      // run AJAX request for unsaved headlines
   $.get("/api/headlines?saved=true"),then(function(data){
       //if a headline,rener to the page 
       if (data && data.length) {
        renderArticles(data);
    }
    else{
        //render message - nor articles found
        renderEmpty();
        } 
   }) ;
}
//functions
function renderArticles(articles){
    //function to append HTML with article data to page
    //pass array of JSON containing all alrticles in the db 
    var articlePanels =[];
    //pass each article JSON object to the createPannel function - render a bootsrap panel containing articel data
    for (let i = 0; i < articles.length; i++) {
       articlePanels.push(createPanel(articles[i]));
      }
      //once articles are stored in the articlePanels array, append them to articlePanels container
      articleContainer.append(articlePanels);
  }
        function createPanel(article){
            //function to tak a single json for article/headlin and constuct Jquery element of formatted HTML for the article panel
            var panel =
            $(["<div class='panel panel-default'>",
                "<div class='panel-heading'>",
                "<h3>",
                article.headline,
                "<a class='btn btn-danger delete'>",
                "Delete From Saved",
                "</a>",
                "<a class='btn btn-info notes'>Article Notes</a>",
                "</h3>",
                "</div>",
                "<div class='panel-body'",
                article.summary,
                "</div>",
                "</div>"
                ].join("") );
                //attach article ids to the JQuerry element to determine which articel user wants saved
                panel.data("_id", article._id);
                //return constructed panel Jquery element
                return panel;
            }
          //function to render HTML to pg - no article to view
function renderEmpty(){
    // use joined array of HTML string data which is easier to read or change than a concatenated string
    var emptyAlert =
    $(["<div class='alert alert-warning text-center'>",
        "<h4>Uh Oh , no new articles.</h4>",
        "</div>",
        "<div class='panel panel-default'>",
        "<div class='panel-heading text-center'>",
        "<h3> Would You Like to Browse Avalible Articles?</h3>",
        "</div>",
        "<div class='panel-body text-center'>",
        "<h4><a href='/'>Browse Articles</a></h4>",
        "</div>",
        "</div>"
    ].join(""));
    //append to page function to render note list to notes modal
    articleContainer.append(emptyAlert);
    }  
  //append to page function to render note list to notes modal
  function renderNotesList(data){
    //var for empty note array
    var notesToRender = [];
    //var to hold each note temporaraly 
    var currentNote;
    // loop through and push to array 
    if (!data.notes.length) {
        //if no notes display message
        currentNote = [
            "<li class='list-group-item'>",
            "No notes for this article yet.",
            "</li>",
        ].join("");
        notesToRender.push(currentNote);
        }
        else{
            //If notes loop that 
            for (let i = 0; i < data.notes.length; i++) {
                //build the li el that contains noteText and del button 
                currentNote = $([
                    "<li class='list-group-item note'>",
                    data.notes[i].noteText,
                    "<button class='btn btn-danger note-delete'>x</button>",
                    "</li>"
                ].join(""));
                //store the note id on the del button for access to del
                currentNote.children("button").data("_id", data.notes[i]._id);
                //add currentNote ot the notes to render array 
                notesToRender.push(currentNote);
            }
        }
        //append the notesToRender to note-container insde the note modal
        $(".note-container").append(notesToRender);
      }
// function for deleting articles/headlines 
function handleArticleDelete(){
//get ID of the artice to del from the panel element and del button inaisw
    var articleToDelete =$(this).parents(".panel").data();
    //use del methond 
    $.ajax({
        method: "DELETE",
        url:"/api/headlines/" + articleToDelete._id
        }).then(function(data){
            //run init pate again to render list of saved artocles 
            if(data.ok){
                initPage();
            }
        });
}
//functon to open note modal and display notes 
function handleArticleNotes(){
    //get id of article to get notes from panel ele  del button 
    var currentArticle = $(this).parents(".panel").data();
    //get any notes with this headline/article id
    $.get("/api/notes/" + currentArticle._id).then(function(data){
        //construct HTML to add to the notes modal
        var modalTexxt = [
            "<div class='container-fluid text-center'>",
            "<h4>Notes For Article: ",
            currentArticle._id,
            "</h4>",
            "<hr />",
            "<ul class='list-group note-container'>",
            "<ul>",
            "<textarea placeholder='New Note' rows='4' cols='60'></textarea>",
            "<button class='btn btn-sucess save' >Save Note</button>",
            "</div>"
        ].join("");
        //add formatted HTML to the note modal
        bootbox.dialog({
            message: modalText,
            closeButton: true
        });
        var noteData = {
            _id: currentArticle._id,
            notes: data || []
        };
        //add info about article and article notes to the save btn when adding new note
        $(".btn.save").data("article", noteData);
        // renderNotesList will populate note HTML inside the modal 
         renderNotesList(noteData);
   
    });
}
// function to handel new note save 
function handleNoteSave(){
    // variable to hold formatted note data, gets typed in note
    var noteData;
    var newNote = $(".bootbox-body textarea").val().trim();
    //format data and post to the api notes route along with formatted note data
    if (newNote) {
        noteData ={
           _id: $(this).data("article")._id,
           noteText: newNote
        };
        $.post("/api/notes", noteData).then(function(){
            //When complete, close the modal
            bootbox.hideAll();
        });
    }
}
// function to handle the deletion of notes 
function handleNoteDelete(){
//get id of note to del which is stored on the del button 
var noteToDelete = $(this).data("_id");
//perform DELETE request to /api/notes with the id of the ote to del as par
$.ajax({
    url: "/api/notes/" + noteToDelete,
    method: "DELETE"
}).then(function(){
    //hide the modal
    bootbox.hideAll();
});
}


});//end of doucment . ready funciton 
