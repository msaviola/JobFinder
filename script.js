

var language = "";
// var location="";
var url = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
// var URL ="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
var description = "description=" + language;

var numberofJobs = 5; //default value

//select language

document.getElementById("CSS").addEventListener("click", function () {
  language = "CSS";
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});

document.getElementById("HTML").addEventListener("click", function () {
  language = "HTML";
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});

document.getElementById("JavaScript").addEventListener("click", function () {
  language = "JavaScript";
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});


document.getElementById("PYTHON").addEventListener("click", function () {
  language = "PYTHON";
  description = "description=" + language;
  console.log(language)
  console.log(description)

  updateURL();
});

//select number of listings

document.getElementById("one").addEventListener("click", function () {
  numberofJobs=1;
  console.log(numberofJobs);
});

document.getElementById("five").addEventListener("click", function () {
  numberofJobs=5;
  console.log(numberofJobs);
});

document.getElementById("ten").addEventListener("click", function () {
  numberofJobs=10;
  console.log(numberofJobs);
});



function updateURL() {

  queryUrl = url + description;

}


function updatePage(response) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves

  console.log("updatePage function");
  console.log(queryUrl);
  console.log(response);
  


  for (var i = 0; i < numberofJobs; i++) {
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
<<<<<<< HEAD

  $(".progress").hide();
 
  $("#run-search").click(function (event) {

    $(".progress").show();
=======
  
  $(".progress").hide();
  $("#run-search").click(function (event) {
    $(".progress").show();

    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
>>>>>>> 346fb19aa7cb6a92bfcc22021f0d11fa0b54db7b
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
  $("#clear-all").on("click", clear)});