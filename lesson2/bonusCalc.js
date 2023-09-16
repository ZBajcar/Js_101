//Ask the user for the first number
//Ask the user for the second number
//Ask the user for an operation to perform
//Perfrom the operation on the two numbers
//Print the results to the terminal
const MESSAGES = require('./bonusCalc_messages.json');

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['first']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['giveNum']);
    number1 = readline.question();
  }

  prompt(MESSAGES['second']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['giveNum']);
    number2 = readline.question();
  }

  prompt(MESSAGES['pick']);
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(MESSAGES['1-4']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`Your result is: ${output}`);

  prompt(MESSAGES['again']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;

}