const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.textContent);
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  const keyMap = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '.': '.',
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    'Enter': '=',
    'Backspace': 'C',
    'Escape': 'C',
  };

  if (keyMap[key]) {
    handleInput(keyMap[key]);
  }
});

function handleInput(value) {
  if (value === 'C') {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    display.value = '';
  } else if (value === '=') {
    if (firstOperand && operator && currentInput) {
      secondOperand = currentInput;
      const result = calculate(firstOperand, secondOperand, operator);
      display.value = result;
      currentInput = result;
      operator = '';
      firstOperand = '';
    }
  } else if (['+', '-', '*', '/'].includes(value)) {
    if (currentInput) {
      firstOperand = currentInput;
      operator = value;
      currentInput = '';
    }
  } else {

    currentInput += value;
    display.value = currentInput;
  }
}

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 0;
  }
}