

var language="";
// var location="";
var url= "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
// var URL ="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";
var description = "description="+language;



document.getElementById("CSS").addEventListener("click", function(){
  language = document.getElementById("CSS").innerHTML; 
  description = "description="+language;
  console.log(language)
  console.log(description)

  updateURL();
});

document.getElementById("HTML").addEventListener("click", function(){
  language = document.getElementById("HTML").innerHTML; 
  description = "description="+language;
  console.log(language)
  console.log(description)

  updateURL();
});

document.getElementById("JavaScript").addEventListener("click", function(){
  language = document.getElementById("JavaScript").innerHTML; 
  description = "description="+language;
  console.log(language)
  console.log(description)

  updateURL();
});


document.getElementById("PYTHON").addEventListener("click", function(){
  language = document.getElementById("PYTHON").innerHTML; 
  description = "description="+language;
  console.log(language)
  console.log(description)

  updateURL();
});


function updateURL(){

  var queryUrl=url + description;

$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function (response) {
  // console.log(url + description+"&location=new+york");
  var Listing = response[0];
  var Jobtitle = Listing.title;
  
  console.log(Listing);
  console.log(Jobtitle);

  
  console.log(queryUrl);

})

}

// // @param {object} NYTData

// function updatePage(Data) {
//   // Get from the form the number of results to display
//   // API doesn't have a "limit" parameter, so we have to do this ourselves
//   var numJobs = $("#Jobs-count").val();
  

//   for (var i = 0; i < numJobs; i++) {
//     // Get specific article info for current index
//     var Listing = response[i];
//     var ListingCount = i + 1;

//     // Create the  list group to contain the articles and add the article content for each
//     var $jobList = $("<ul>");
//     $jobList.addClass("list-group");

//      // Add the newly created element to the DOM
//      $("#job-section").append($jobList);

//      var Jobtitle = Listing.title;
//       var $ListItem = $("<li class='list-group-item title'>");
//       $articleListItem.append(
//         "<span class='label label-primary'>" +
//           jobCount +
//           "</span>" +
//           "<strong> " +
//           Jobtitle +
//           "</strong>"
//       );


//      // Append the article
//      $jobList.append($ListItem);
// }
// }

