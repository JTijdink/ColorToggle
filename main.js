
const logo = document.querySelector(".container");
const menu = document.querySelector(".menu");


logo.addEventListener("click", function(){
    menu.classList.toggle("showmenu");

});

menu.addEventListener("click" , function(){
menu.classList.remove("showmenu")
});

function white(){document.body.style.background = "white";}
function red(){ document.body.style.background = "red"; }
function blue(){ document.body.style.background = "blue"; }
function green(){document.body.style.background = "green";}
function grey(){document.body.style.background = "grey";}
function purple(){document.body.style.background = "purple";}









