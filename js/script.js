const buttons = document.querySelector('.mobile-down-keys'); // Все кнопки
const result = document.querySelector('.mobile-down-result__input'); // Вывод

const numbers = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['÷', '×', '-', '+'];

let number1 = ''; // Первое число
let number2 = ''; // Второе число
let sign = ''; // Знак
let flagFinish = false; // Флаг завершения операции
let flagPlusMinus = false; // Флаг переключателя 
let flagNumber1 = false; // Флаг первого числа
let flagNumber2 = false; // Флаг второго числа

// Функция - очистить все
let clearAll = () => {
   number1 = '';
   number2 = '';
   sign = '';
   flagFinish = false;
   flagPlusMinus = false;
   result.value = 0;
};

// Функция формирования строки
let _getNumberString = (key, target) => {
   console.log(target)
   number1 += key;
   if (target.classList.contains("pm")) {
      console.log("kc")
      number1 = Number(number1) * -1;
   }
   return number1;
   // number1 += key;
   // let str = number1;
   // if (key === "+/-") {
   //    if (flagPlusMinus = !flagPlusMinus) {
   //       str = str.replace('+/-', '-');
   //       console.log(str)

   //    }
   //    else {
   //       number1 = number1.replace('+/-', '');
   //    }

   // }
   // number1 = str;
   // console.log(key)
   // return number1;
   // console.log(key)
   // if (key==="+/-"){
   //    console.log("1r")
   //    if (flagPlusMinus = !flagPlusMinus) {
   //       console.log("2r")
   //        number1 = Number(number1)*-1;
   //       result.value =  number1;
   //    }
   //    else {
   //       result.value = number1;
   //    }
   // }
   // if (key === '.') {
   //    if (!number1.includes('.')) {
   //       number1 += key;
   //       result.value = number1;
   //    }
   //    else {
   //       result.value = number1;
   //    }
   // }
   // else {
   //    number1 += key;
   //    result.value = number1;
   // }
}

// Обработка нажатия кнопок
buttons.addEventListener('click', (evt) => {
   // Проверка нажатия на кнопку
   if (!evt.target.classList.contains("mobile-down-keys__button")) { return };
   // Нажата кнопка 'АС' (очистить все)
   if (evt.target.classList.contains("ac")) { clearAll(); }
   //
   if (evt.target.classList.contains("pm")) {

   }
   // Очистка экрана перед нажатием
   //  result.value = '';
   key = evt.target.textContent;
   const target = evt.target;
   // Нажата кнопка '0-9'
   if (numbers.includes(key)) {
      if (number2 === "" && sign === "") {
         result.value = _getNumberString(key, target);
         flagNumber1 = true;
         flagNumber2 = false;
      }
      else if (number1 !== "" && number2 !== "" && flagFinish) {
         number2 = key;
         flagFinish = false;
         result.value = number2;
         // if (evt.target.classList.contains("pm")) {
         //    if (flagPlusMinus = !flagPlusMinus) {
         //       number2 = Number(number2) * -1;
         //       result.value = number2;
         //    }
         //    else {
         //       result.value = number2;
         //    }
         // }
      }
      else {
         number2 += key;
         result.value = number2;
         flagNumber2 = true;
         flagNumber1 = false;
         // if (evt.target.classList.contains("pm")) {
         //    console.log("1")
         //    if (flagPlusMinus = !flagPlusMinus) {
         //       console.log("2")
         //       number2 = Number(number2) * -1;
         //       result.value = number2;
         //    }
         //    else {
         //       result.value = number2;
         //    }
         // }
      }
   }
   // Нажата кнопка '÷', '×', '-', '+'
   if (action.includes(key)) {
      sign = key;
      result.value = number1;
   }
   // Нажата кнопка '%'
   if (key === '%') {
      if (flagNumber1) {
         number1 = Number(number1 / 100);
         result.value = number1;
      }
      else if (flagNumber2) {
         number2 = Number(number2 / 100);
         result.value = number2;
      }
   }
   // 
   console.log(number1, sign, number2);
   // Нажата кнопка '='
   if (key === "=") {
      if (number2 === '') {
         number2 = number1;
      }
      switch (sign) {
         case "+":
            number1 = Number(number1) + Number(number2);
            break;
         case "-":
            number1 = Number(number1) - Number(number2);
            break;
         case "÷":
            if (number2 === '0') {
               result.value = "Ошибка";
               number1 = '';
               number2 = '';
               sign = '';
               return;
            }
            number1 = Number(number1) / Number(number2);
            break;
         case "×":
            number1 = Number(number1) * Number(number2);
            break;
      }
      flagFinish = true;
      result.value = number1;
   }
});