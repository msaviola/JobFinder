

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
  console.log(response);
  console.log(queryUrl);
})

}


