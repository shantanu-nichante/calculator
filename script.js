let currentInput = "";
let operator = null;
let previousInput = "";

const display = document.getElementById("display");

function clearDisplay() {
    currentInput = "";
    operator = null;
    previousInput = "";
    updateDisplay("0");
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === "" && op === "-") {
        currentInput = "-";
        updateDisplay(currentInput);
        return;
    }
    if (currentInput === "") return;
    if (operator !== null) calculateResult();
    previousInput = currentInput;
    currentInput = "";
    operator = op;
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
    }
}

function calculateResult() {
    if (operator === null || currentInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.innerText = value;
}

// Initialize calculator
clearDisplay();
