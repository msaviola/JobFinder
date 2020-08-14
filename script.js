

var language;
var description = "description="+language;

// function myLanguage() {
//   language = document.getElementById("CSS").innerHTML;
   
//   console.log(language)
//   // element.classList.add("mystyle");
// }

// button.addEventListener("click", function(){ 
//   if()
//   //button is CSS
//   language = document.getElementById("CSS").innerHTML; 
  
//   if()
//   //button is HTML
//   language = document.getElementById("HTML").innerHTML; 
  
//   console.log(language)

// });

document.getElementById("CSS").addEventListener("click", function(){
  language = document.getElementById("CSS").innerHTML; 
  console.log(language)
});

document.getElementById("HTML").addEventListener("click", function(){
  language = document.getElementById("HTML").innerHTML; 
  console.log(language)
});

document.getElementById("JavaScript").addEventListener("click", function(){
  language = document.getElementById("JavaScript").innerHTML; 
  console.log(language)
});


document.getElementById("PYTHON").addEventListener("click", function(){
  language = document.getElementById("PYTHON").innerHTML; 
  console.log(language)
});




$.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?" +language+"&location=new+york",
  method: "GET",
}).then(function (response) {
  console.log(response);
})

