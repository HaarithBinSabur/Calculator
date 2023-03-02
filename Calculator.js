class Calculator {
    constructor() {
        this.result = document.getElementById('result');
        this.expression = '';
        this.operator = '';
        this.prevValue = 0;
        this.currentValue = 0;
        this.isDecimal = false;
    }

    clear() {
        this.expression = '';
        this.operator = '';
        this.prevValue = 0;
        this.currentValue = 0;
        this.isDecimal = false;
        this.result.value = '';
    }

    input(value) {
        if (value === '.') {
            if (!this.isDecimal) {
                this.expression += value;
                this.isDecimal = true;
            }
        } else {
            this.expression += value;
        }

        this.result.value = this.expression;
    }

    add() {
        this.prevValue = parseFloat(this.expression);
        this.expression = '';
        this.operator = '+';
        this.isDecimal = false;
    }

    subtract() {
        this.prevValue = parseFloat(this.expression);
        this.expression = '';
        this.operator = '-';
        this.isDecimal = false;
    }

    multiply() {
        this.prevValue = parseFloat(this.expression);
        this.expression = '';
        this.operator = '*';
        this.isDecimal = false;
    }

    divide() {
        this.prevValue = parseFloat(this.expression);
        this.expression = '';
        this.operator = '/';
        this.isDecimal = false;
    }

    calculate() {
        this.currentValue = parseFloat(this.expression);

        switch (this.operator) {
            case '+':
                this.expression = this.prevValue + this.currentValue;
                break;
            case '-':
                this.expression = this.prevValue - this.currentValue;
                break;
            case '*':
                this.expression = this.prevValue * this.currentValue;
                break;
            case '/':
                this.expression = this.prevValue / this.currentValue;
                break;
            default:
                break;
        }

        this.result.value = this.expression.toString();
        this.prevValue = 0;
        this.currentValue = 0;
        this.operator = '';
        this.isDecimal = false;
    }
}

const calculator = new Calculator();
