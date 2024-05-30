let displayValue = '';

function appendInput(value) {
    displayValue += value;
    updateDisplay(displayValue);
}

function clearDisplay() {
    displayValue = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function calculate() {
    try {
        let result = eval(displayValue);
        updateDisplay(result);
        displayValue = result.toString();
    } catch (error) {
        updateDisplay('Error');
        displayValue = '';
    }
}
