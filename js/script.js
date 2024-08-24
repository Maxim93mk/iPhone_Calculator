const buttons = document.querySelectorAll('.mobile-down-keys__button');
const result = document.querySelector('.mobile-down-result__input');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');

console.log(num1.value, num2.value);
let res = 0;
buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
switch (elem.textContent) {
                        case "+":
                            res = Number(num1.value) + Number(num2.value);
                            break;
                        case "-":
                            res = Number(num1.value) - Number(num2.value);
                            break;
                        case "÷":
                            res = Number(num1.value) / Number(num2.value);
                            break;
                        case "×":
                            res = Number(num1.value) * Number(num2.value);
                            break;
                    }
                })
        if(elem.textContent==="="){
    result.value = res;
}        
});

console.log(res)
// let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// let operators = ['AC', '+/-', '%', '÷', '×', '-', '+', '=', ','];

// let num1 = 0;
// let num2 = 0;
// let flagSign = false;
// let flagComma = false;
// let flagOper = false;
// let res = 0;
// let input_str = '';
// let oper = '';
// let str = ''
// buttons.map((e)=>{
//     console.log(e)
// });


// buttons.forEach((elem) => {
//     elem.addEventListener('click', () => {
//         str += elem.textContent;
//         if (isNaN(str) === false) {
            
//             console.log(str);
//             if (!flagOper) {
//                 num1 = Number(str);
//                 result.value = num1;
//             }
//             else {
//                 num2 = Number(str);
               
//                 result.value = num2;
//                 // console.log("res", num1, num2)
//                 switch (oper) {
//                     case "+":
//                         console.log(num2 + "x")
//                         res = num1 + num2;
//                         break;
//                     case "-":
//                         res = num1 - num2;
//                         break;
//                     case "÷":
//                         res = num1 / num2;
//                         break;
//                     case "×":
//                         res = num1 * num2;
//                         break;
//                 }
//             }
//         }
//         else {
//             flagOper = true;
//             str = '';
//             oper = elem.textContent;
//             if (oper == "=") {
//                 result.value = res;
//             }
//             // if (elem.textContent == "+") {
//             //     res = num1 + num2;
//             //     console.log("m4");
//             // }
//             // if (elem.textContent == "=") {
//             //     result.value = res;
//             //     console.log("m5");
//             // }


//             //     if (elem.textContent == "=") {
//             //         result.value = res;
//             //         console.log("m5");
//             // }


//             // result.value = str;

//             // console.log(str)

//         }








//         // console.log(num1, num2, res);
//         // num2 = Number(str);
//         // // str += elem.textContent;
//         // result.value = str;
//         // // console.log(str)
//         // let operators = elem.textContent;
//         // switch (operators) {
//         //     case ",":
//         //         if (flagComma === false) {
//         //             str += ",";
//         //             flagComma = true;
//         //         }
//         //         break;
//         //     case "AC":
//         //         num1 = 0;
//         //         num2 = 0;
//         //         str = 0;
//         //         flagComma = false;
//         //         result.value = 0;
//         //         break;
//         //     case "+/-":
//         //         if (flagSign = !flagSign) {

//         //         }
//         //         else {

//         //         }
//         //         break;
//         //     case "%":
//         //         break;
//         //     case "÷":
//         //         break;
//         //     case "×":
//         //         break;
//         //     case "+":
//         //         res = num1+num2;
//         //         str = '';
//         //         console.log(num1)
//         //         break;
//         //     case "-":
//         //         break;
//         //     case "=":
//         //         result.value = res;

//         //         break;
//         // }
//         // if(elem.textContent=="AC"){

//         // }
//         // result.value = str;
//         // console.log(num1)
//         //    let str = Number(elem.innerHTML) 
//         //     if(str!=NaN){
//         //         num1 = Number(elem.innerHTML);
//         //          console.log(num1, typeof(num1), typeof(str))
//         //     }
//         //     // 

//         //      result.value = elem.innerHTML;
//     });
// });


// buttons.addEventListener('click', (event) => {
//     const text = event.target.innerText;
//     if (numbers.includes(text)) {
//         result.value = text;
//         num1 = + result.value;
//     }
//     else if (operators.includes(text)) {
//         result.value = text;
//         operator = + result.value;
//     }
// });

