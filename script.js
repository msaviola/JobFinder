

/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */

function buildQueryURL() {

var queryURL = "https://jobs.github.com/positions.json?";

var queryParams= "";



//language description
var desciption= $("#search") 
.val()
.trim();
if (parseInt(description)) {
    queryParams.description = "description="+description;
   }

//location
// If the user provides a location, include it in the queryParams object
 var location = $("#location")
 .val()
 .trim();

if (parseInt(location)) {
 queryParams.location = "&location="+location;
}
//fulltime


//if no terms are filled in
else{
    queryParams.q= 'search=node';
}


// Logging the URL so we have access to it for troubleshooting

console.log("URL: " + queryURL);
console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);

}




/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} JobData - object containing NYT API data
 */
function updatePage(JobData) {
    // Get from the form the number of results to display
    // API doesn't have a "limit" parameter, so we have to do this ourselves
    var numJobs = $("#Jobs-count").val();
  
    // Log the NYTData to console, where it will show up as an object
    console.log(JobData);
    console.log("------------------------------------");
  
    // Loop through and build elements for the defined number of articles
    for (var i = 0; i < numJobs; i++) {
      // Get specific article info for current index
      var Listing = JobData.response.docs[i];
  
      // Increase the articleCount (track article # - starting at 1)
      var Count = i + 1;
  
      // Create the  list group to contain the articles and add the article content for each
      var $JobList = $("<ul>");
      $JobList.addClass("list-group");
  
      // Add the newly created element to the DOM
      $("#article-section").append($JobList);
  
      // If the article has a headline, log and append to $articleList
      var JobTitle = Listing.title;
      var $ListItem = $("<li class='list-group-item company'>");


      
      if (JobTitle && title.main) {
        console.log(title.main);
        $articleListItem.append(
          "<span class='label label-primary'>" +
            Count +
            "</span>" +
            "<strong> " +
            title.main +
            "</strong>"
        );
      }



  $("#run-search").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // Empty the region associated with the articles
    clear();
  
    // Build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();
  
    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
  });
  
  //  .on("click") function associated with the clear button
  $("#clear-all").on("click", clear);





