const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('[data-type="digit"]');
const opButtons = document.querySelectorAll('[data-type="op"]');
const equalButton = document.querySelector('[data-type="equal"]');
const clearButton = document.querySelector('[data-type="clear"]');

let operandOne;
let operator;

const getDisplay = () => display.textContent;
const setDisplay = (str) => (display.textContent = str);
const digitHandler = (e) => (display.textContent += e.target.dataset.value);

digitButtons.forEach((btn) => btn.addEventListener('click', digitHandler));

opButtons.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const op = e.target.dataset.value;

    if (operandOne === undefined && getDisplay() === '') {
      return;
    }

    // an op button is pressed twice in a row
    if (operandOne && getDisplay() === '') {
      operator = op;
      return;
    }

    if (operandOne === undefined && getDisplay() !== '') {
      operandOne = getDisplay();
      operator = op;
      setDisplay('');
      return;
    }

    if (operandOne && getDisplay() !== '') {
      operandOne = operate(operator, operandOne, getDisplay());
      operator = op;
      setDisplay('');
      return;
    }
  })
);

equalButton.addEventListener('click', (e) => {
  if (getDisplay() !== '') {
    operandOne = operate(operator, operandOne, getDisplay());
    setDisplay(operandOne);
  }
});
clearButton.addEventListener('click', (e) => {});

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;

const operate = (op, num1, num2) => {
  console.log(`${num1} ${op} ${num2}`);
  switch (op) {
    case '+':
      return add(Number.parseInt(num1), Number.parseInt(num2));
    case '-':
      return subtract(Number.parseInt(num1), Number.parseInt(num2));
    case '/':
      return divide(Number.parseInt(num1), Number.parseInt(num2));
    case 'x':
      return multiply(Number.parseInt(num1), Number.parseInt(num2));
    default:
      return;
  }
};
