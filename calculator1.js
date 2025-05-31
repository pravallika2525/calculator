
        let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');

let numbers = document.getElementsByClassName('number');
let operators = document.getElementsByClassName('operator');

let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        if (this.id === 'decimal' && currentNumber.includes('.')) {
            return;
        }
        currentNumber += this.textContent;
        display.value = currentNumber;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        if (this.id === 'clear') {
            currentNumber = '';
            previousNumber = '';
            currentOperator = '';
            display.value = '';
            return;
        }

        if (this.id === 'backspace') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
            return;
        }

        if (this.id === 'equals') {
            if (currentNumber === '' || previousNumber === '') {
                return;
            }
            let result;
            switch (currentOperator) {
                case '+':
                    result = parseFloat(previousNumber) + parseFloat(currentNumber);
                    break;
                case '-':
                    result = parseFloat(previousNumber) - parseFloat(currentNumber);
                    break;
                case '*':
                    result = parseFloat(previousNumber) * parseFloat(currentNumber);
                    break;
                case '/':
                    if (currentNumber === '0') {
                        display.value = 'Error';
                        return;
                    }
                    result = parseFloat(previousNumber) / parseFloat(currentNumber);
                    break;
                default:
                    return;
            }
            display.value = result;
            previousNumber = '';
            currentNumber = result.toString();
            currentOperator = '';
            return;
        }

        if (currentNumber === '') {
            return;
        }
        previousNumber = currentNumber;
        currentNumber = '';
        currentOperator = this.textContent;
    });
}