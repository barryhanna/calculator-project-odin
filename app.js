const display = document.querySelector('.display');

const buttons = document.querySelector('.buttons');
const operations = ['x', '/', '-', '+'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const operationList = [];
const numberList = [];
let displayNumber = '';

buttons.addEventListener('click', (e) => {
  // ignore non-button clicks
  const button = e.target.dataset.value;

  if (!button) {
    return;
  }
  console.log(`${button}`);
  if (button === 'clear') {
    clear();
    return;
  }
  if (operations.includes(button)) {
    operationList.push(button);
    console.log(`${button} added to operation list`);
    console.log(`${operationList}`);

    return;
  }

  if (button === 'equal') {
  }

  if (digits.includes(button)) {
    if (numberList > 0) {
      setDisplay(operate(operationList.pop(), numberList.pop(), getDisplay()));
    } else {
      setDisplay(getDisplay() + button);
    }
  }
});

const divide = (num1, num2) => num1 / num2;
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 / num2;

const operate = (op, num1, num2) => {
  console.log(`${num1} ${op} ${num2}`);
  const firstOperand = Number.parseInt(num1);
  const secondOperand = Number.parseInt(num2);
  switch (op) {
    case '+':
      return add(firstOperand, secondOperand);
    case '-':
      return subtract(firstOperand, secondOperand);
    case '/':
      return divide(firstOperand, secondOperand);
    case 'x':
      return multiply(firstOperand, secondOperand);
    default:
      return;
  }
};

const setDisplay = (str) => {
  display.textContent = '';
  displayNumber = Number.parseInt(str);
  display.textContent = str;
};

const getDisplay = () => {
  return display.textContent;
};

const clear = () => setDisplay('0');
