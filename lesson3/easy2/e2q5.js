// prompts the user for two positive integers, and 
//then prints the results of the following operations on those two numbers: 
//addition, subtraction, product, quotient, remainder, and power
const readline = require('readline-sync');

let firstNum = parseInt(readline.question("Enter the first number: "),10);

let secondNum = parseInt(readline.question("Enter the second number: "),10);

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
prompt(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
prompt(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
prompt(`${firstNum} / ${secondNum} = ${parseInt((firstNum / secondNum),10)}`);
prompt(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
prompt(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);


/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/