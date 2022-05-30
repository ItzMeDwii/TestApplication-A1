// https://www.npmjs.com/package/enquirer -- UNTUK MEMBACA INPUT CONSOLE
const { prompt } = require('enquirer');

prompt({
    type: 'input',
    name: 'kalkulator',
    message: 'Masukkan input kalkulator! Contoh: 1 + 1'
})
    .then(answer => console.log('Answer:', kalkulator(answer.kalkulator)));


function kalkulator(input) {

    const validation = input.match(/^\s*([-+]?)(\d+ )(?:\s*([-+*\/])\s*((?:\s[-+])? \d+)\s*)+$/g);
    let output = '';
    if (!validation) {
        output = "Input tidak valid."
    } else {
        const operand = validation[0].match((/\d+(\.\d+)?/g));
        const operator = validation[0].match(/[\+\-\/\*\^\%]/g);

        if (operand[0] > 1000000 || operand[1] > 1000000 || operand[0] < -1000000 || operand[1] < -1000000) {
            output = "Input lebih dari 1000000"
        } else {
            switch (operator[0]) {
                case '+':
                    output = operand[0] * 1 + operand[1] * 1;
                    break;
                case '-':
                    output = operand[0] - operand[1];
                    break;
                case '*':
                    output = operand[0] * operand[1];
                    break;
                case '/':
                    output = operand[0] / operand[1];
                    break;
                default:
                    output = '';
            }
        }
    }
    return output;
}
