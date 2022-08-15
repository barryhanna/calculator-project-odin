const display = document.querySelector('.display');

const buttons = document.querySelector('.buttons');
const operations = ['x', '/', '-', '+'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const operationList = [];
const numberList = [];
let displayNumber = '';

buttons.addEventListener('click', (e) => {
  const button = e.target.dataset.value;

  // ignore non-button clicks
  if (!button) {
    return;
  }

  console.log(`${button} clicked`);

  if (button === 'clear') {
    clear();
  } else if (operations.includes(button)) {
    handleOpClick(button);
  } else if (button === 'equal') {
    handleEqualClick();
  } else {
    setDisplay(getDisplay() + button);
  }
});

const handleEqualClick = () => {
  const result = operate(operationList.pop(), numberList.pop(), getDisplay());
  numberList.push(result);
  console.log(`${result}`);
  setDisplay(result);
};

const handleOpClick = (button) => {
  if (numberList.length === 0) {
    return;
  }
  const currentNumber = getDisplay();
  operationList.push(button);
  numberList.push(currentNumber);
  displayNumber = currentNumber;
  logState();
  setDisplay('');
};

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;

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
  if (str) {
    display.textContent = '';
    displayNumber = Number.parseInt(str);
    display.textContent = displayNumber;
  } else {
    display.textContent = '';
  }
};

const logState = () => {
  console.log(`Numbers: ${numberList}`);
  console.log(`Ops: ${operationList}`);
};

const getDisplay = () => {
  return display.textContent;
};

const clear = () => setDisplay('');
