var numMatch = 0;
var blueNum = 0;
var yellowNum = 0;
var greenNum = 0;
var redNum = 0;
var userNum = 0;
var wins = 0;
var losses = 0;

function start(){

    $("#winCount").html("Wins; " + wins);
    numMatch = Math.floor(Math.random() * 81 + 1);
    
    $("#randomizedNum").html("Number to match: " + numMatch);

    userNum = 0;
    $("#currentScore").html("Current score: " + userNum);

    blueNum = Math.floor(Math.random() * 10 + 1);
    yellowNum = Math.floor(Math.random() * 10 + 1);
    greenNum = Math.floor(Math.random() * 10 + 1);
    redNum = Math.floor(Math.random() * 10 + 1);
    console.log(blueNum);
    console.log(yellowNum);
    console.log(greenNum);
    console.log(redNum);
}

function numInput(){

    $("#crystyle1").on("click", function(){
        $("#crystyle1").addClass("animated bounce");
        var timer = setInterval(function(){
            $("#crystyle1").removeClass("animated bounce");
            clearInterval(timer);
        }, 1000);

        userNum = userNum + blueNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });

    $("#crystyle2").on("click", function(){
        $("#crystyle2").addClass("animated bounce");
        var timer = setInterval(function(){
            $("#crystyle2").removeClass("animated bounce");
            clearInterval(timer);
        }, 1000);

        userNum = userNum + yellowNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });

    $("#crystyle3").on("click", function(){
        $("#crystyle3").addClass("animated bounce");
        var timer = setInterval(function(){
            $("#crystyle3").removeClass("animated bounce");
            clearInterval(timer);
        }, 1000);

        userNum = userNum + greenNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });

    $("#crystyle4").on("click", function(){
        $("#crystyle4").addClass("animated bounce");
        var timer = setInterval(function(){
            $("#crystyle4").removeClass("animated bounce");
            clearInterval(timer);
        }, 1000);
        
        userNum = userNum + redNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });
}

function winCondition(){
    if (userNum === numMatch){
        wins++;
        $("#alert").html("YOU WON!");
        
        var timer = setInterval(function(){
            $("#alert").html("");
            clearInterval(timer);
        }, 2000);

        
        $("#winCount").html("Wins: " + wins);
        start();
    }
    else if (userNum > numMatch){
        losses++;
        $("#alert").html("YOU LOST!");
       
        var timer = setInterval(function(){
            $("#alert").html("");
            clearInterval(timer);
        }, 2000);
        
     
        $("#lossCount").html("Losses: " + losses);
        start();
    }
}

function resetGame(){
    $("#reset").on("click", function(){
        wins = 0;
        losses = 0;
        userNum = 0;
        
        $("#winCount").html("Wins: " + wins);
        $("#lossCount").html("Losses: " + losses);
        $("#currentScore").html("Current score: " + userNum);
        
        start();

    })
} 


resetGame();
numInput();
start();