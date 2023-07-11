function appendValue(value) {
    var display = document.getElementById("result");
    display.value += value;
}

function calculate() {
    var display = document.getElementById("result");
    var expression = display.value;
    
    expression = expression.replace(/sin/g, "Math.sin");
    expression = expression.replace(/cos/g, "Math.cos");
    expression = expression.replace(/tan/g, "Math.tan");

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    var display = document.getElementById("result");
    display.value = "";
}

function deleteDigit() {
    var display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

function appendDigit(digit) {
    var display = document.getElementById("result");
    display.value += digit;
}

function appendOperator(operator) {
    var display = document.getElementById("result");
    display.value += operator;
}

function appendScientificFunction(func) {
    var display = document.getElementById("result");
    display.value += func + "(";
}

function appendValue(value) {
    var display = document.getElementById("result");
    if (value === '°') {
        display.value += '°';
    } else {
        display.value += value;
    }
}
