//I need: 1) the loan amount 2) the Annual Percentage Rate (APR)
//3) the loan duration
//calculate; 1) monthly interest rate 2) loan duration in months
// use this formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
//m = monthly payment, p = loan amount, j = monthly interest rate,
//n = loan duration in months

const MESSAGES = require('./morgCalc_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(num) {
  return Number.isNaN(Number(num)) ||
         Number(num) < 0 ||
         num.trim() === '';
}

prompt(MESSAGES['welcome']);
while (true) {

  prompt(MESSAGES['break']);
  prompt(MESSAGES['loanAmount']);
  let loanAmount = readline.question();

  while (isInvalidNumber(loanAmount)) {
    prompt(MESSAGES['positive']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['interestRate']);
  let interesetRate = readline.question();

  while (isInvalidNumber(interesetRate)) {
    prompt(MESSAGES['positive']);
    interesetRate = readline.question();
  }

  let annualInterestRate = Number(interesetRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;

  prompt(MESSAGES['loanDuration']);
  let loanDurationInMonths = readline.question();

  while (isInvalidNumber(loanDurationInMonths)) {
    prompt(MESSAGES['positive']);
    loanDurationInMonths = readline.question();
  }

  let monthlyPaymentNoRound = Number(loanAmount) * (monthlyInterestRate /
(1 - Math.pow((1 + monthlyInterestRate), (-Number(loanDurationInMonths)))));

  let monthlyPayment = monthlyPaymentNoRound.toFixed(2);

  prompt(`Your monthly payment is $${monthlyPayment}`);
  prompt(MESSAGES['break']);
  prompt(MESSAGES['again']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;

}