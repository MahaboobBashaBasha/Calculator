const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let operator = '';
let previousValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === 'AC') {
            currentValue = '';
            operator = '';
            previousValue = '';
            display.value = '';
        }
        else if (value === 'DEL') {
            currentValue = currentValue.toString().slice(0, -1);
            display.value = currentValue;
        }
        else if (['+', '-', '*', '/', '%'].includes(value)) {
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        }
        else if (value === '=') {
            if (previousValue !== '' && currentValue !== '' && operator !== '') {
                switch (operator) {
                    case '+':
                        currentValue = parseFloat(previousValue) + parseFloat(currentValue);
                        break;
                    case '-':
                        currentValue = parseFloat(previousValue) - parseFloat(currentValue);
                        break;
                    case '*':
                        currentValue = parseFloat(previousValue) * parseFloat(currentValue);
                        break;
                    case '/':
                        currentValue = parseFloat(previousValue) / parseFloat(currentValue);
                        break;
                    case '%':
                        currentValue = parseFloat(previousValue) % parseFloat(currentValue);
                        break;
                }
                operator = '';
                previousValue = '';
                display.value = currentValue;
            }
        }
        else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
