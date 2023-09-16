//Prompt for a bill amount and a tip rate. 
//Compute the tip
//Log both the tip and the total amount of the bill
const readline = require('readline-sync');

function prompt(msg) {
  console.log("=>" + msg);
}

prompt('What is the bil?');
let billAmount = readline.question();
billAmount = Number(billAmount);

prompt("what is the tip percentage?");
let tipPercentage = readline.question();
tipPercentage = Number(tipPercentage) / 100;

let tipTotal;
let total;

function getTipTotal(tipPercent,bill) {
  tipTotal = tipPercent * bill;
}

function gettotal(tip,bill) {
  total = tip + bill;
}

getTipTotal(tipPercentage,billAmount);
gettotal(tipTotal,billAmount);

prompt("The tip is $" + tipTotal.toFixed(2));
prompt("The total is $" + total.toFixed(2));


/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/