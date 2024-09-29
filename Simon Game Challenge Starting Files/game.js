//list of available colours
var buttonColours = ["red", "blue", "green", "yellow"];

//game pattern to be followed by the player
var gamePattern = [];

//pattern followed by user
var userClickedPattern = [];

//level counter
var level = 0;

//click counter
var clickCount = 0;

//handler function
function handleClick(){

}

//function to create random number, set a random colour and push it to the list "gamePattern", set animation to the button.
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    const buttonR = "." + randomChosenColour;

    //gamePattern.push(randomChosenColour);

    $(buttonR).fadeIn(100).fadeOut(100).fadeIn(100);


    return randomChosenColour;
}

//click handler function
$(".btn").on("click",function (e) {
        
    var userChosenColour = this.id;
    var userChosenNumber = buttonColours.indexOf(userChosenColour);
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    
    if(gamePattern[clickCount] == userChosenColour){
        console.log("ok");
        clickCount++
        if(clickCount == gamePattern.length){
            setTimeout(() => {
                $("#level-title").html("Level-" + level);
                var randomChosenColour = nextSequence();
                playSound(randomChosenColour);
                gamePattern.push(randomChosenColour);
        
                level++;
                clickCount = 0;
                userClickedPattern.length = 0; 
            },1000);
            
        }
    }
    else{
        console.log("not Ok")
        $("body").addClass("game-over");
        $("h1").html("Game Over - Press any key to restart!")
        $("body").keydown(function (e) { 
            $("body").removeClass("game-over");
            location.reload();
        });
            
    }
    


    




    $(this).addClass("pressed");

    var button = $(this);
    setTimeout(function() {
    button.removeClass("pressed");
}, 100);

});

//function to play sounds
function playSound(name){

    var audioR = new Audio("sounds/" + name +".mp3");

    audioR.play();

    $(".btn").on("click",function (e) { 
    
        //ID of the clicked button(div)
        var userChosenColour = this.id;
    
        var playB = "sounds/" + userChosenColour+".mp3";
        var audio = new Audio(playB);
    
        audio.play();
    
        console.log(userChosenColour);

    });
}


    
    $("#level-title").html("Level-" + level);
    var randomChosenColour = nextSequence();
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log("hello")
    level++;
    clickCount = 0;
    userClickedPattern.length = 0;




//getting the four random colour combinations for the player
// for(let i = 0; i < buttonColours.length; i++){

//     var randomChosenColour = buttonColours[nextSequence()];

//     const buttonR = "." + randomChosenColour;

//     gamePattern.push(randomChosenColour);



    //set a variable for sound respective to the color of the button

    // var playB = "sounds/" + randomChosenColour+".mp3";
    
    // var audio = new Audio(playB);

    // audio.play();


//Behaviour when the user clicks on a div

// $(".btn").on("click",function (e) { 

//     $(this).fadeIn(100).fadeOut(100).fadeIn(100);
    
// });