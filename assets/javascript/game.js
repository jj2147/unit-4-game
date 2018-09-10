function rand(min,max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function play(){
    for(i=0; i<4; i++){

        var number = rand(1,12);
        while(crystals.includes(number)){
            number = rand(1,12);
        }
        crystals[i] = number;
    }

    target = rand(19,120);
}

function check(){
    if(points == target){
        alert("you win");
        wins++;
        $("#wins").html(wins);
        $(".btn-primary").show();
    }
    
    if(points > target){
        alert("you lose");
        losses++;
        $("#losses").html(losses);
        $(".btn-primary").show();
    }
}


var crystals = [];
var points = 0;
var target = 0;
var wins = 0;
var losses = 0;

$(".btn-primary").hide();


$(document).ready(function() {

    play();

    $("#points").html(points);
    $("#target").html(target);
    $("#wins").html(wins);
    $("#losses").html(losses);
    


    $("#img1").on("click", function(){
        points += crystals[0];
        $("#points").html(points);
        check();
    });
    $("#img2").on("click", function(){
        points += crystals[1];
        $("#points").html(points);
        check();
    });
    $("#img3").on("click", function(){
        points += crystals[2];
        $("#points").html(points);
        check();
    });
    $("#img4").on("click", function(){
        points += crystals[3];
        $("#points").html(points);
        check();
    });





    $(".btn-primary").on("click", function(){
        $(".btn-primary").hide();
        play();
        points = 0;
        $("#points").html(points);
        $("#target").html(target);
    })
});