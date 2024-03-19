var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

nextSequence();

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(80).fadeIn(80);
    playSound(randomChosenColour);
    
}

$(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    animatePress(userChosenColour);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})

function animatePress (currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playSound (name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}