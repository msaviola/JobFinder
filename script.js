

var language = "";
// var location="";
var url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
// var URL ="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
var description = "description=" + language;



document.getElementById("CSS").addEventListener("click", function () {
  language = document.getElementById("CSS").innerHTML;
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});

document.getElementById("HTML").addEventListener("click", function () {
  language = document.getElementById("HTML").innerHTML;
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});

document.getElementById("JavaScript").addEventListener("click", function () {
  language = document.getElementById("JavaScript").innerHTML;
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});


document.getElementById("PYTHON").addEventListener("click", function () {
  language = document.getElementById("PYTHON").innerHTML;
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});


function updateURL() {

  queryUrl = url + description;

}
// console.log(url + description+"&location=new+york");
// var Listing = response[0];
// var Jobtitle = Listing.title;

// console.log(Listing);
// console.log(Jobtitle);


// console.log(queryUrl);








function updatePage(response) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves
  var numJobs = $("#Jobs-count").val();
  console.log("updatePage function");


  for (var i = 0; i < numJobs; i++) {
    // Get specific article info for current index
    var Listing = response[i];
    var ListingCount = i + 1;

    // Create the  list group to contain the articles and add the article content for each
    var $jobList = $("<ul>");
    $jobList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#job-section").append($jobList);

    var Jobtitle = Listing.title;
    var $ListItem = $("<li class='list-group-item title'>");
    
    
    $ListItem.append(
      "<span class='label label-primary'>" +
      ListingCount +
      "</span>" +
      "<h4> " +
      Jobtitle +
      "</h4>"
    );

    //company name
    $ListItem.append("<h5>" + Listing.company + "</h5>");
    // Append and log url
    $ListItem.append("<a href='" + Listing.url + "'>" + Listing.url + "</a>");
    

    // Append the article
    $jobList.append($ListItem);
    
  }
  $(".progress").hide();
}

function clear() {
  $("#job-section").empty();
  console.log("clear button clicked");
}

$(document).ready(function () {

  
    // // Empty the region associated with the articles
    // clear();

    // // Build the query URL for the ajax request to the NYT API
    // var queryURL = updateURL();

    // // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // // The data then gets passed as an argument to the updatePage function
    // $.ajax({
    //   url: queryUrl,
    //   method: "GET",
    // }).then(updatePage);


    $(".progress").hide();
    $("#run-search").click(function (event) {
      $(".progress").show();

      // This line allows us to take advantage of the HTML "submit" property
      // This way we can hit enter on the keyboard and it registers the search
      // (in addition to clicks). Prevents the page from reloading on form submit.
      event.preventDefault();
      console.log("search button clicked");

      clear();

      var queryURL = updateURL();
       $.ajax({
      url: queryUrl,
      method: "GET",
    }).then(updatePage);
    
    });
    
    //  .on("click") function associated with the clear button
    $("#clear-all").on("click", clear);

  });