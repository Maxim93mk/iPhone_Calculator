const buttons = document.querySelector('.mobile-down-keys');
const result = document.querySelector('.mobile-down-result__input');

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
let actions = ['AC', '+/-', '%', '÷', '×', '-', '+', '='];

let num1 = '';
let num2 = '';
let res = '';
let operator = '';
let actionFlag = false;

buttons.addEventListener('click', (event) => {
    const text = event.target.innerText;
    if (numbers.includes(text)) {
        if (num2 == '' && operator == '') {
            num1 += text;
            result.value = num1;
        }
        else if (num1 != '' && num2 == '') {
            num2 = text;
            result.value = num2;
            console.log("klkglk");
        }
        else {
            num2 += text;
            result.value = num2;
        }
    }
    else if (actions.includes(text)) {
        operator = text;
        
        if (operator == "=") {

            switch (operator) {
                // case "AC":
                //     num1 = '';
                //     num2 = '';
                //     res = '';
                //     result.value = 0;
                //     break;
                case "+":
                    res = num1 + num2;
                    // actionFlag = true;
                    console.log(num1 + " | " + num2 + " | ");
                    break;
                //     case "=":
                //         actionFlag = false;
                //         // result.value = res;
                //         break;
                // }

                // console.log(num1 + " | " + num2 + " | " + res);
            }
            // // actionFlag = true;

            // // if (operator == "=") {


            // switch (operator) {
            //     case "AC":
            //         num1 = '';
            //         num2 = '';
            //         res = '';
            //         result.value = 0;
            //         actionFlag = false;
            //         break;
            //     case "+":
            //         res = num1 + num2;

            //          console.log(res);
            //         break;
            //     case "=":
            //          result.value = res;
            //          num1 = '';
            //          num2 = '';
            //         //  res = '';
            //         console.log(num1 + " | " + num2 + " | " + res);
            //         break;
            // }

            // }
            // console.log(num1 + " | " + num2 + " | " + res);
            // }
        }
    }
    });

