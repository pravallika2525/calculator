let display = document.getElementById('display');
let currentNumber = '';

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
}

for (let i = 0; i < document.getElementsByClassName('number').length; i++) {
    document.getElementsByClassName('number')[i].addEventListener('click', function() {
        display.value += this.textContent;
    });
}

for (let i = 0; i < document.getElementsByClassName('operator').length; i++) {
    document.getElementsByClassName('operator')[i].addEventListener('click', function() {
        if (this.id === 'clear') {
            clearDisplay();
        } else if (this.id === 'equals') {
            calculate();
        } else {
            display.value += this.textContent;
        }
    });
}