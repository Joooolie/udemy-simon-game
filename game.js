var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

nextSequence();

//playSound(randomChosenColour);

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(80).fadeIn(80);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

// console.log($("div:button"));
// $(":button").click(function() {
//     console.log("button clicked");
// })