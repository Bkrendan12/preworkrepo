// Assignment Code
 
document.getElementById("growbutton").addEventListener("click", function(){

    document.getElementById("box").style.height="350px";  
});



document.getElementById("bluebutton").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor="blue";

    });


    $(document).ready(function(){
$("#fadebutton").click(function(){
$("div").fadeOut();
});
});

document.getElementById("resetButton").addEventListener("click", function(){

document.getElementById("box").style.backgroundColor="orange"; 
});

document.getElementById("resetButton").addEventListener("click", function(){

document.getElementById("box").style.height="150px"; 
});

$(document).ready(function(){
$("#resetButton").click(function(){
$("div").fadeIn();
});
});    