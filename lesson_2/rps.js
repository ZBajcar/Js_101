//The user makes a choice.
//The computer makes a choice.
//The winner is displayed.
const readline = require('readline-sync');

let validChoices = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(answer,computerChoice) {
  prompt(`You chose: ${answer}. Computer chose: ${computerChoice}`);

  if ((answer === 'rock' && computerChoice === 'scissors') ||
    (answer === 'paper' && computerChoice === 'rock') ||
    (answer === 'scissors' && computerChoice === 'paper')) {
    prompt('You won');
  } else if ((answer === 'scissors' && computerChoice === 'rock') ||
           (answer === 'rock' && computerChoice === 'paper') ||
           (answer === 'paper' && computerChoice === 'scissors')) {
    prompt("Computer won");
  } else {
    prompt("It's a tie");
  }

}

while (true) {

  prompt(`Choose one: ${validChoices.join(', ')}`);
  let answer = readline.question();

  while (!validChoices.includes(answer)) {
    prompt("This is not a valid choice");
    answer = readline.question();
  }

  let computerIndex = Math.floor(Math.random() * validChoices.length);

  let computerChoice = validChoices[computerIndex];

  displayWinner(answer,computerChoice);

  prompt("Would you like to play again?(y/n)");
  let goAgain = readline.question().toLowerCase();

  while (goAgain[0] !== 'y' && goAgain[0] !== 'n') {
    prompt("Please provide y to play again or n to stop");
    goAgain = readline.question().toLowerCase();
  }

  if (goAgain[0] !== 'y') break;
}