//this JS is for html index page
$(document).ready(function() {
  //ref to the article-container div for the dynamicaly generated content
  var articleContainer = $(".article-container");
  //event listner to dynamically generated "save-article"
  $(document).on("click", ".btn.save", handleArticleSave);
  // "scrape new article button "
  $(document).on("click", ".scrape-new", handleArticleScrape);
  //when page ready, run init Page function
  initPage();
  function initPage() {
    //empty article container
    articleContainer.empty();
    // run AJAX request for unsaved headlines
    $.get("/api/headlines?saved=false").then(function(data) {
      //if headline, render it to page
      if (data && data.length) {
        renderArticles(data);
      } else {
        //render message - nor articles found
        renderEmpty();
      }
    });
  }
  //functions
  function renderArticles(articles) {
    //function to append HTML with article data to page
    //pass array of JSON containing all alrticles in the db
    var articlePanels = [];
    //pass each article JSON object to the createPannel function - render a bootsrap panel containing articel data
    for (let i = 0; i < articles.length; i++) {
      articlePanels.push(createPanel(articles[i]));
    }
    //once articles are stored in the articlePanels array, append them to articlePanels container
    articleContainer.append(articlePanels);
  }
  function createPanel(article) {
    //function to take a single json for article/headling and constuct Jquery element of formatted HTML for the article panel
    var panel = $(
      [
        "<div class='panel panel-default'>",
        "<div class='panel-heading'>",
        "<h3>",
        article.headline,
        "<a class='btn btn-success save'>",
        "Save Article",
        "</a>",
        "</h3>",
        "</div>",
        "<div class='panel-body'",
        article.summary,
        "</div>",
        "</div>"
      ].join("")
    );
    //attach article ids to the JQuerry element to determine which article user wants saved
    panel.data("_id", article._id);
    //return constructed panel Jquery element
    return panel;
  }
  //function to render HTML to pg - no article to view
  function renderEmpty() {
    // use joined array of HTML string data which is easier to read or change than a concatenated string
    var emptyAlert = $(
      [
        "<div class='alert alert-warning text-center'>",
        "<h4>Uh Oh , no new articles for today.</h4>",
        "</div>",
        "<div class='panel panel-default'>",
        "<div class='panel-heading text-center'>",
        "<h3>What Would You Like To Do?</h3>",
        "</div>",
        "<div class='panel-body text-center'>",
        "<h4><a class='scrape-new'>Try Scraping New Articles</a></h4>",
        "<h4><a href='/saved'>Go to Saved Articles</a></h4>",
        "</div>",
        "</div>"
      ].join("")
    );
    //append to page
    articleContainer.append(emptyAlert);
  }
  //function triggered when user saves article
  function handleArticleSave() {
    //when article initialy rendered attach js object containing headline id to the element using .data method
    var articleToSave = $(this)
      .parents(".panel")
      .data();
    articleToSave.saved = true;
    //Using a patch mehtod to be semantic since this is an update to an existing record in the collection
    $.ajax({
      method: "PATCH",
      url: "/api/headlines",
      data: articleToSave
    }).then(function(data) {
      //if success, mongoose will send back object conating a key of OK with the value of 1 = which casts to "true"
      if (data.ok) {
        // run the initpage function again to reload the entier list of articles
        initPage();
      }
    });
  }
  //functon to handle scrape
  function handleArticleScrape() {
    //user clicks "scrape new article button"
    $.get("/api/fetch").then(function(data) {
      //if scrape done,compared to articles in collection, re render articles on page and show user how many unique article were saved
      initPage();
      bootbox.alert(
        "<h3 class='text-center m-top-80'>" + data.message + "<h3>"
      );
    });
  }
}); //end of document ready function
