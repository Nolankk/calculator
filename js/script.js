const buttonContainer = document.querySelectorAll('.button');
const display = document.getElementById('display');
let expression = '';

const OPERATOR_ = ['/', '*', '%', '+', '-'];

// eval()

buttonContainer.forEach((button) => {
    button.addEventListener('click', (e) => {   
        if (e.target.className === 'mid') {
            display.textContent += e.target.textContent;
        }

        if (e.target.textContent == 'AC') {
            display.textContent = '';
            expression = '';
        } else if (e.target.textContent == '+/-') {
            if (display.textContent[0] === '-')
            {
                display.textContent = display.textContent.substring(1);
            } else if (display.textContent[0] === '') {}
            else {
                display.textContent = '-' + display.textContent;
            }
        } else if (e.target.id.includes('operator')) {
            if (OPERATOR_.includes(expression.charAt(expression.length - 1))) {
                let ans = eval(expression + display.textContent);
                ans = Math.round((ans + Number.EPSILON) * 100) / 100;
                expression = ans + e.target.textContent;
            } else {
                expression = display.textContent + e.target.textContent;
            }
            display.textContent = '';
        }  else if (e.target.textContent === '=') {
            if (expression === '') {
                return 0;
            }

            let ans = eval(expression + display.textContent);
            ans = Math.round((ans + Number.EPSILON) * 100) / 100;
            display.textContent = ans;
            expression = ans.toString();
        }
    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    } else {
        return 'Error: Invalid Operator!';
    }
}