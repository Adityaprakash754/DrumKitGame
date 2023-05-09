/* in the case below if we call the function with parenthesis it will call the 
 function as soon as the script tag is executed without even clicking

 we can rewrite the code below with an anonymus function to avoide confusion as
 document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!");
 }); 
*/


// for click
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfButtons ;i++){
document.querySelectorAll("button")[i].addEventListener("click", buttonClick);
}


function buttonClick () {
    var buttonInnerHTML = this.innerHTML;
    playSound (buttonInnerHTML);

    buttonAnimation (buttonInnerHTML);
}

// for keyboard press
document.addEventListener("keypress",keyboardPress);

function keyboardPress (event) {
    playSound (event.key);

    buttonAnimation (event.key);
}


function playSound (key) {
    
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        default:
            alert("wrong key!");
    }
}


// for animation add pressed class which is present in css

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector ("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);

}