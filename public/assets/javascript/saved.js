//saved artcle js 
//get the page ready 
$(document).ready(function(){
    //ref to the article-container div for the dynamicaly generated content
    var articleContainer = $(".article-container");
    //event listner on click events  
    $(document).on("click", ".btn.delete", handleArticleDelete);
    $(document).on("click", ".btn.notes", handleArticleNotes);
    $(document).on("click", ".btn.save", handleNoteSave);
    $(document).on("click", ".btn.note-delete", handleNoteDelete);
   //when page ready, run init Page function 
   initPage();
     //empty article container
         function initPage();{

}
//functions
function renderArticles(articles){
    //function to append HTML with article data to page
    //pass array of JSON containing all alrticles in the db 

  }
        function createPanel(article){
            //function to take a single json for article/headlin and constuct Jquery element of formatted HTML for the article panel
    
          //function to render HTML to pg - no article to view
function renderEmpty(){
    // use joined array of HTML string data which is easier to read or change than a concatenated string

    }  
  //append to page function to render note list to notes modal
  function renderNotesList(data){
 
      }
// function for deleting articles/headlines 
function handleArticleDelete(){
//get ID of the artice to del from the panel element and del button inaisw

}
//functon to open note modal and display notes 
function handleArticleNotes(){
    //get id of article to get notes from panel ele  del button 

}
// function to handel new note save 
function handleNoteSave(){
    // variable to hold formatted note data, gets typed in note

}
// function to handle the deletion of notes 
function handleNoteDelete(){

}


});//end of doucment . ready funciton 
