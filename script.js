
// /**
//  * pulls information from the form and build the query URL
//  * @returns {string} URL for NYT API based on form inputs
//  */


// var queryUrl = "https://api.indeed.com/ads/apisearch?publisher=123412341234123&q=java+developer&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2"

// // var queryParams= "";

// $.ajax({
//   url: queryUrl,
//   method: "GET"
// })
// .then(function (response){

//   // console.log(url)
//   console.log(response)
// })


$.ajax({
  url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=pyyn&location=new+yk`,
  method: "GET",
}).then(function (response) {
  console.log(response);
})


/* //language description
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





 */