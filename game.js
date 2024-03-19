var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var gameHasStarted = false;

var level = 0;

var userIndex = 0;

$(".btn").click(function(event) {
    var userChosenColour = event.target.id;

    animatePress(userChosenColour);
    playSound(userChosenColour);

    userClickedPattern.push(userChosenColour);

    checkAnswer(userIndex);
})

$("body").keypress(function(event){
    if (!gameHasStarted) {
        nextSequence();
    }
    gameHasStarted = true;
  });


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        userIndex++;

        if (currentLevel == (gamePattern.length-1)) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            
            
        }
        
    } else {
        gameOver();
    }
    
}

function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    level = 0;
    gameHasStarted = false;
}


function nextSequence() {
    $("h1").text("Level "+level);
    level++;
    userClickedPattern = [];
    userIndex = 0;

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    
    animatePress(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(80).fadeIn(80);
    playSound(randomChosenColour);
    
}

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