const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('[data-type="digit"]');
const opButtons = document.querySelectorAll('[data-type="op"]');
const equalButton = document.querySelector('[data-type="equal"]');
const clearButton = document.querySelector('[data-type="clear"]');
const deleteButton = document.querySelector('[data-type="del"]');

let operandOne;
let operator;

const getDisplay = () => display.textContent;
const setDisplay = (str) => (display.textContent = str);
const digitHandler = (e) => {
  if (display.textContent.includes('.') && e.target.dataset.value === '.') {
    return;
  }
  display.textContent += e.target.dataset.value;
};

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
  if (getDisplay() !== '' && operandOne) {
    if (getDisplay() === '0') {
      setDisplay('None of that');
    } else {
      operandOne = operate(operator, operandOne, getDisplay());
      setDisplay(Math.round(operandOne, 2));
    }
  }
});

clearButton.addEventListener('click', (e) => {
  operandOne = undefined;
  operator = undefined;
  setDisplay('');
});

deleteButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

const clickNumberButton = (number) => {
  Array.from(digitButtons)
    .filter((button) => button.dataset.value === number)[0]
    .click();
};

const clickOpButton = (opBtn) => {
  Array.from(opButtons)
    .filter((button) => button.dataset.value === opBtn)[0]
    .click();
};

document.body.addEventListener('keypress', (e) => {
  console.log('Key pressed');
  console.log(e.key);
  switch (e.key) {
    case 'd':
      deleteButton.click();
      break;
    case 'c':
      clearButton.click();
      break;
    case '0':
      clickNumberButton('0');
      break;
    case '1':
      clickNumberButton('1');
      break;
    case '2':
      clickNumberButton('2');
      break;
    case '3':
      clickNumberButton('3');
      break;
    case '4':
      clickNumberButton('4');
      break;
    case '5':
      clickNumberButton('5');
      break;
    case '6':
      clickNumberButton('6');
      break;
    case '7':
      clickNumberButton('7');
      break;
    case '8':
      clickNumberButton('8');
      break;
    case '9':
      clickNumberButton('9');
      break;
    case '.':
      clickNumberButton('.');
      break;
    case '/':
      clickOpButton('/');
      break;
    case '-':
      clickOpButton('-');
      break;
    case '+':
      clickOpButton('+');
      break;
    case 'x':
      clickOpButton('x');
      break;
    case '=':
      equalButton.click();
      break;
    case 'Enter':
      equalButton.click();
    default:
  }
});

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;

const operate = (op, num1, num2) => {
  // console.log(`${num1} ${op} ${num2}`);
  switch (op) {
    case '+':
      return add(Number.parseFloat(num1), Number.parseFloat(num2));
    case '-':
      return subtract(Number.parseFloat(num1), Number.parseFloat(num2));
    case '/':
      return divide(Number.parseFloat(num1), Number.parseFloat(num2));
    case 'x':
      return multiply(Number.parseFloat(num1), Number.parseFloat(num2));
    default:
      return;
  }
};
