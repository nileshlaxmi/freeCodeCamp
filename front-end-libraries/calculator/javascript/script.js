let justEvaluated = false;
let currentInput = '';
let currentOperation = '';
let previousInput = '';

const display = document.getElementById("display");
const resultDisplay = document.getElementById("result");

const updateDisplay = () => {
    document.getElementById('display').innerText =
        `${previousInput} ${currentOperation} ${currentInput}`.trim();
};

const onNumberClick = (number) => {
    if (justEvaluated) {
        currentInput = '';
        justEvaluated = false;
    }

    if (number === '.' && currentInput.includes('.')) return;

    if (number === 0 && currentInput === '0') return;

    if (currentInput === '0' && number !== '.') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }

    updateDisplay();
};

const onOperatorClick = (operator) => {
    // If we just pressed equals, use result as starting point
    if (justEvaluated) {
        justEvaluated = false;
        previousInput = currentInput;
        currentInput = '';
    }

    // If no current input, allow '-' to begin negative number
    if (currentInput === '') {
        if (operator === '-') {
            // Only add minus if not already a '-'
            if (!currentInput.includes('-')) {
                currentInput = '-';
                updateDisplay();
            }
        } else {
            // Replace the previous operator (e.g., user pressed multiple operators)
            currentOperation = operator;
            updateDisplay();
        }
        return;
    }

    // If we already have previousInput, perform intermediate calc
    if (previousInput !== '' && currentInput !== '-') {
        onCalculate();
        previousInput = currentInput;
        currentInput = '';
    } else {
        previousInput = currentInput;
        currentInput = '';
    }

    currentOperation = operator;
    updateDisplay();
};

const onClear = () => {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    justEvaluated = false;
    display.innerHTML = '0';
    resultDisplay.innerHTML = '0';
};

const onCalculate = () => {
    if (
        previousInput === '' ||
        currentInput === '' ||
        currentInput === '-' ||
        isNaN(parseFloat(currentInput))
    ) return;

    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    let result;
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').innerText = currentInput;
    document.getElementById('result').innerText = currentInput;
    justEvaluated = true;
};