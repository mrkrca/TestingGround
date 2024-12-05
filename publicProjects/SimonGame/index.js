
var gameColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userChosenPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level:   " + level)
        started = true;
        nextSequence();
        
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id")
    userChosenPattern.push(userChosenColor);
    playSound(userChosenColor);
    animationPress(userChosenColor);
    checkAnswer(userChosenPattern.length - 1)
});

function nextSequence(){
    userChosenPattern =[];
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var gameChosenColor = gameColors[randomNumber];
    gamePattern.push(gameChosenColor);
    animationPress(gameChosenColor);
}

function playSound(choice){
    var audio = new Audio("/sounds/" + choice + ".mp3")
    audio.play();
}

function animationPress(current){
    $("#" + current).addClass("pressed");

    setTimeout(function(){
        $("#" + current).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userChosenPattern[currentLevel]){
        if(gamePattern.length === userChosenPattern.length){
            console.log("true");
            $("#level-title").text("Level:   " + level)
            setTimeout(function(){
                nextSequence();
            },500 )

        }
    } else {
        console.log('false');
        gameOver();
        playSound("wrong")
        $("#level-title").text("GAME OVER! Press any KEY to RESTART")
            $("body").css("background-color", "red")
        setTimeout(function(){
            $("body").css("background-color", "rgb(36, 5, 119)");
        },500)
    }
}

function gameOver(){
    level = 0;
    started = false;
    gamePattern =[];
}