

/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */

var queryURL = "https://jobs.github.com/positions.json?";

var queryParams= "";


//language description
queryParams.q = $("#search")
.val()
.trim();

//location
// If the user provides a location, include it in the queryParams object
 var location = $("#location")
 .val()
 .trim();

if (parseInt(location)) {
 queryParams.location = location;
}
//fulltime

// Logging the URL so we have access to it for troubleshooting

console.log("URL: " + queryURL);
console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);





