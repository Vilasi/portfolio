$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();

    /* ScrollReveal allows the selected class to be revealed as the page is scrolled down*/
    ScrollReveal().reveal('.scrollReveal');


    
    
    
    
    
});


let firstIntroMessage = document.getElementById("first-fade");
firstIntroMessage.style.visibility = "hidden";

let secondIntroMessage = document.getElementById("second-fade")
secondIntroMessage.style.visibility = "hidden";

let thirdIntroMessage = document.getElementById("third-fade")
thirdIntroMessage.style.visibility = "hidden";

let fourthIntroMessage = document.getElementById("fourth-fade")
fourthIntroMessage.style.visibility = "hidden";


window.onload = (event) => {
    firstIntroMessage.style.visibility = "visible";
    secondIntroMessage.style.visibility = "visible";
    thirdIntroMessage.style.visibility = "visible";
    fourthIntroMessage.style.visibility = "visible";

    
}


/*
let secondIntroMessage = $('#second-fade');
firstIntroMessage.style.visibility = "hidden";
secondIntroMessage.style.visibility = "hidden";
*/