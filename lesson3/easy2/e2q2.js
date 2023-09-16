//Write a program that will ask for user's name.
//The program will then greet the user.
//If the user writes "name!" then the computer yells back to the user.

const readline = require("readline-sync");

let name = readline.question("What is your name? ");
while ("name!".includes(name)) {
  console.log("WHAT IS YOUR NAME");
  name = readline.question();
}

console.log("Hello " + name);








//What is your name? Bob
//Hello Bob.