let runningTotal = 0;
var previuschar;
var buffer = 0;
var symbol = "";

const display = document.getElementById("display");


function addToDisplay(value) {
    buffer += value;
    if(value === '.'){
        console.log(value)
    }
    else{
        buffer = parseFloat(buffer);
    }
    
    updateDisplay();
    console.log(buffer);
}

function updateDisplay() {
    display.innerHTML = buffer;
}

function makeOperation() {

    runningTotal = parseFloat(runningTotal);
    buffer = parseFloat(buffer);

    switch (symbol) {
        case '+':
            buffer += runningTotal;
            updateDisplay();
            break;

        case '-':
            buffer += runningTotal;
            updateDisplay();
            break;

        case '*':
            buffer *= runningTotal;
            updateDisplay();
            break;

        case '/':
            runningTotal /= buffer;
            buffer = runningTotal;
            updateDisplay();
            break;
    }
}
function addSymbolToDisplay(value) {
    switch (value) {
        case '+':
            runningTotal = buffer;
            buffer = '+';
            symbol = '+';
            updateDisplay();
            break;

        case '-':
            runningTotal = buffer;
            buffer = '-';
            symbol = '-';
            updateDisplay();
            break;

        case 'x':
            runningTotal = buffer;
            buffer = '*';
            symbol = '*';
            updateDisplay();
            buffer = 0;
            break;

        case '/':
            runningTotal = buffer;
            buffer = '/';
            symbol = '/';
            updateDisplay();
            buffer = 0;
            break;

        case 'C':
            buffer = 0;
            runningTotal = 0;
            updateDisplay();
            break;

        case '.':
            buffer += '.' ;
            buffer = parseFloat(buffer);
            updateDisplay();
            break;

        case '=':
            makeOperation();
            updateDisplay();
            break;
    }
}

