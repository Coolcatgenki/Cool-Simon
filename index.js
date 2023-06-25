let comP=[];
let comR=[];
let  n=0;
let buttonsR=["red", "blue", "yellow", "green"];
let start= false;
const title= $("h1");



$(document).on("keypress", function(){
    start=true;
    if(n===0){
    if(start===true){
    randomSelect();
    }
 }
})

setTimeout(function(){
    $("h2").html("");
    start=true;
    if(n===0){
    if(start===true){
    randomSelect();
    }
}}, 5000)
   

$(".btn").click(function(){
    if(n>=1){
    comP.push($(this).attr("id"));
    animation($(this));
    sound($(this).attr("id"));
    check(comP.length-1);
    }
})

function randomSelect(){
    comP=[];
    var rn= Math.floor(Math.random()*4);
    var cr=buttonsR[rn];
    comR.push(cr);
    n++;
    title.text("Level "+n);
    $(this).attr("id")
    setTimeout(function(){sound(buttonsR[rn]);},1000);
    setTimeout(function(){animation($("#"+cr));}, 1000);
}



function lose(){
    $("body").addClass("game-over");
    sound("wrong");
    setTimeout(function(){ $("body").removeClass("game-over");}, 300);
    title.text("Game over, press any key to restart");
        comR=[];
        comP=[];
        n=0;
        start= false;
        $("h2").html("The game will start automatically in 5 seconds");
        setTimeout(function(){
            $("h2").html("");
            start=true;
            if(n===0){
            if(start===true){
            randomSelect();
            }
        }}, 5000)
}

function animation(x){
    x.addClass("pressed");
    setTimeout(function(){x.removeClass("pressed");}, 100);
    
 
}

function check(x){
    if(comP[x]===comR[x]){
        if(comP.length===comR.length){
            randomSelect();
        }
    }
    else{
        lose();
    }
}

function sound(x){
var x= new Audio("sounds/"+x+".mp3");
x.play()

}
