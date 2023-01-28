let num1 = '';
let num2 = '';
let operator = '';

function numClick(num) {
    if (operator === '') {
        num1 += num;
        document.getElementById('display').value = num1;
    } else {
        num2 += num;
        document.getElementById('display').value = num2;
    }
}

function operClick(oper) {
    if (oper === '=') {
        calculate();
    } else {
        operator = oper;
    }
}

function calculate() {
    let result;
    if (operator === '+') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
        result = parseFloat(num1) / parseFloat(num2);
    }
    else if (operator === '%') {
        result = parseFloat(num1) % parseFloat(num2);
    }
    document.getElementById('display').value = result;
    num1 = '';
    num2 = '';
    operator = '';
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('display').value = '';
}