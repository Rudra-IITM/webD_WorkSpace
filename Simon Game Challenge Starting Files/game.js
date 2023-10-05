var bColors=["red","green","blue","yellow"];
var gPattern=[];
var userPattern=[];
var started=false;
var level=0;

$(document).keypress(function (event){
    if (!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
})

function startOver(){
    level=0;
    gPattern=[];
    started=false;
}

function checkAns(clevel){
    if (userPattern[clevel]===gPattern[clevel]) {
        console.log("success");
        if (userPattern.length===gPattern.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function animatePress(name){
    $("."+name).addClass("pressed");
    setTimeout (function(){
        $("."+name).removeClass("pressed");
    },100);
}

function playSound(name){
    var audio =new Audio("./sounds/"+name+".mp3")
    audio.play();
}

$(".btn").click(function (){
    var uColor=$(this).attr("id");
    userPattern.push(uColor);
    playSound(uColor);
    animatePress(uColor);
    checkAns(userPattern.length-1);
});

function nextSequence(){
    userPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randN=Math.floor(Math.random()*4);
    var rColor=bColors[randN];
    gPattern.push(rColor);
    $("#"+rColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(rColor);
}