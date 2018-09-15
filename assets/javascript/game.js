var numMatch = 0;
var blueNum = 0;
var yellowNum = 0;
var greenNum = 0;
var redNum = 0;
var userNum = 0;
var wins = 0;
var losses = 0;

function start(){
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
        userNum = userNum + blueNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });
    $("#crystyle2").on("click", function(){
        userNum = userNum + yellowNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });
    $("#crystyle3").on("click", function(){
        userNum = userNum + greenNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });
    $("#crystyle4").on("click", function(){
        userNum = userNum + redNum;
        
        $("#currentScore").html("Current score: " + userNum);

        winCondition();
    });
}

function winCondition(){
    if (userNum === numMatch){
        wins++;
        alert("You win!!!");
        $("#winCount").html("Wins; " + wins);
        start();
    }
    else if (userNum > numMatch){
        losses++;
        alert("You lose!!!");
        $("#lossCount").html("Losses; " + losses);
        start();
    }
}


numInput();
start();