let runningTotal = 0;
var previuschar;
var screen = 0;
var symbol = "";

const display = document.getElementById("display");

function previusOperator(){
    previuschar = screen.length - 1;
    if(typeof previuschar === "number"){
        console.log("não é")
    } else{ console.log("é")}
}
function addToDisplay(value){

screen += value;
display.innerHTML = screen;
screen = parseInt(screen);
previusOperator();
}