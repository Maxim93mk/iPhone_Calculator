const buttons = document.querySelector('.mobile-down-keys');
const result = document.querySelector('.mobile-down-result__input');

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operators = ['AC', '+/-', '%', '÷', '*', '-', '×', '=', ','];

let num1 = 0;
let num2 = 0;
let operator = '';

buttons.addEventListener('click', (event) => {
    const text = event.target.innerText;
    if (numbers.includes(text)) {
        result.value = text;
        num1 = + result.value;
    }
    else if (operators.includes(text)) {
        result.value = text;
        operator = + result.value;
    }
});

