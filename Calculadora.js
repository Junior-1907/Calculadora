let runningTotal = 0;
var buffer = 0;
var symbol = "";
const display = document.getElementById("display");
const afterDisplay = document.getElementById("display-after");


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

    if( symbol == '-'){
        afterDisplay.innerText =  runningTotal + " " +  " " + buffer + ' = ';
    }
    else{
        afterDisplay.innerText =  runningTotal + " " + symbol + " " + buffer + ' = ';
    }
    
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
    
    afterDisplay.innerText = buffer + symbol;
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
            afterDisplay.innerText = "";
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
        case '←':
            voltar();
            console.log(buffer);
            buffer = parseFloat(buffer);
            updateDisplay();
            afterDisplay.innerText = buffer + symbol;
            break;
    }
    
}
function voltar() {
    buffer = buffer + ""
    if(buffer != '+' || '-' || '*' || '/'){
        const comprimento = buffer.length;
            if (comprimento > 1 ) {
                buffer = buffer.slice(0, comprimento - 1);
            } else {
                buffer = "";
            }
    }
  }
