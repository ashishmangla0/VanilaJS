

const URL = "aseaea" ;
console.log(URL);


// create a 
var $ = function(id) { 
    return document.querySelector(id)
 }



 $("#getValue").addEventListener("click", function(){
     console.log($('#inputVal').value);
  });
