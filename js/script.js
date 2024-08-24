const buttons = document.querySelector('.mobile-down-keys'); // Все кнопки
const result = document.querySelector('.mobile-down-result__input'); // Вывод

const numbers = [',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['+/-', '%', '÷', '×', '-', '+'];

let number1 = ''; // Первое число
let number2 = ''; // Второе число
let sign = ''; // Знак
let res = ''; // Результат выполнения математических действий
let flagFinish = false; // Завершение операции

// Функция - очистить все
let clearAll = () => {
   number1 = '';
   number2 = '';
   res = '';
   sign = '';
   flagFinish = false;
   result.value = 0;
};

// Обработка нажатия кнопок
buttons.addEventListener('click', (evt) => {
   // Проверка нажатия на кнопку
   if (!evt.target.classList.contains("mobile-down-keys__button")) { return };
   // Нажата кнопка АС (очистить все)
   if (evt.target.classList.contains("ac")) { clearAll(); }
   // Очистка экрана перед нажатием
   //result.value = res;
   key = evt.target.textContent;
   if (numbers.includes(key)) {
      if (number2 === "" && sign === "") {
         number1 += key;
         result.value = number1;
      }
      else if (number1 !== "" && number2 !== "" && flagFinish) {
         res = key;
         flagFinish = false;
         result.value = res;
      }
      else {
         number2 += key;
         result.value = number2;
      }
   }
   if (action.includes(key)) {
      sign = key;
   }
   console.log(number1, sign, number2);
   // Нажата кнопка =
   if (key === "=") {
      if (number2 === '') {
         number2 = number1;
      }
      switch (sign) {
         case "+":
            res = Number(number1) + Number(number2);
            break;
         case "-":
            res = Number(number1) - Number(number2);
            break;
         case "÷":
            res = Number(number1) / Number(number2);
            if (res === Infinity) {
               res = "Ошибка";
               number1 = '';
               number2 = '';
               sign = '';
            }
            break;
         case "×":
            res = Number(number1) * Number(number2);
            break;
      }
      flagFinish = true;
      result.value = res;
   }
});