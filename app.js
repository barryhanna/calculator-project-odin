const display = document.querySelector('.display');

const divide = (num1, num2) => num1 / num2;
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 / num2;

const operate = (op, num1, num2) => {
  switch (op) {
    case 'add':
      return add(num1, num2);
    case 'subtract':
      return subtract(num1, num2);
    case 'divide':
      return divide(num1, num2);
    case 'multiply':
      return multiply(num1, num2);
    default:
      return;
  }
};

const setDisplay = (str) => {
  display.textContent = str;
};

const clear = () => setDisplay('0');
