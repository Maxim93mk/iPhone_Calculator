const buttons = document.querySelector('.mobile-down-keys');
const result = document.querySelector('.mobile-down-result__input');

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let actions = ['%', '÷', '×', '-', '+', '='];

let num1 = '';
let num2 = '';
let res = '0';
let operator = '';
let actionFlag = false;

buttons.addEventListener('click', (event) => {
    const text = event.target.innerText;
    if (numbers.includes(text)) {
        if (num2 == '' && operator == '') {
            num1 += text;
            result.innerText = num1;
            console.log("num1: " + num1);
        }
        else if (num1 != '' && num2 == '' && operator != '') {
            num2 = text;
            result.innerText = num2;
            console.log("num2: " + num2);
        }
        else {
            num2 += text;
            result.innerText = num2;
            console.log("num23: " + num2);
        }
    }
    else if (actions.includes(text)) {
        operator = text;
        console.log(operator);
    }
    if (num1 != '' && num2 != '') {
        res = Number(res);
        num1 = Number(num1);
        num2 = Number(num2);
        switch (operator) {
            case "+":
                // res = parseFloat(num1) + parseFloat(num2);
                res = num1 + num2;
                break;
            case "-":
                // res = parseFloat(num1) - parseFloat(num2);
                res = num1 - num2;
                break;
            case "×":
                // res = parseFloat(num1) * parseFloat(num2);
                res = num1 * num2;
                break;
            case "÷":
                // res = parseFloat(num1) / parseFloat(num2);
                res = num1 / num2;
                break;
        }
        if (operator == "=") {
            result.innerText = res;
            console.log("res: " + res);
        }
    }
});

