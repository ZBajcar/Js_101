//Build a program that logs when the user will retire 
//and how many more years the user has to work until retirement.

const readline = require('readline-sync');

let currentAge = parseInt(readline.question('What is your age? '),10);

let ageRetire = parseInt(readline.question("At what age would you like to retire? "),10);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = ageRetire - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);

/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/