var playerCharChosen = false;

var characters = {
    
    kobe: {
        
        name: "Kobe Wan Kenobi",
        attackPower: 8,
        counterAttackPower: 24,
        hp: 120,
        
    },

    luke: {

        name: "Luke Skywalton",
        attackPower: 10,
        counterAttackPower: 5,
        hp: 100,
        
    },

    cp3: {

        name: "CP3-0",
        attackPower: 10,
        counterAttackPower: 20,
        hp: 150,
        
    },

    chuck: {

        name: "Jabba the Chuck",
        attackPower: 12,
        counterAttackPower: 25,
        hp: 180,
        
    }
};

$(document).ready(function(){

    $("#char1").on("click", function(){
        
        $("#char1").appendTo("#playerCharHolder");
        playerCharChosen = true;
        
    })
    $("#char2").on("click", function(){
        
        $("#char2").appendTo("#playerCharHolder");
        playerCharChosen = true;
        
    })
    $("#char3").on("click", function(){
        
        $("#char3").appendTo("#playerCharHolder");
        playerCharChosen = true;
        
    })
    $("#char4").on("click", function(){
        
        $("#char4").appendTo("#playerCharHolder");
        playerCharChosen = true;
        
    })

    if(playerCharChosen){
        
        $("#char1").on("click", function(){
        
            $("#char1").appendTo("#enemyDefenderHolder");
            
            
        })
        $("#char2").on("click", function(){
        
            $("#char2").appendTo("#enemyDefenderHolder");
            
            
        })
        $("#char3").on("click", function(){
        
            $("#char3").appendTo("#enemyDefenderHolder");
            
            
        })
        $("#char4").on("click", function(){
        
            $("#char4").appendTo("#enemyDefenderHolder");
            
            
        })
    }
})