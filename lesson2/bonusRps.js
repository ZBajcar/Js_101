//The user makes a choice.
//The computer makes a choice.
//run program until someone gets to 3 wins
//display grand winner
const MESSAGE = require('./bonusRps_messages.json');
const readline = require('readline-sync');

let validChoices = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  sp: 'spock',
  l: 'lizard'
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let answer;

function changeAnswer() {
  if ((answer === 'spock') || (answer === 'scissors')) {
    answer = answer.slice(0,2);
  } else if ((answer === 'rock') ||
             (answer === 'paper') ||
             (answer === 'lizard')) {
    answer = answer.slice(0,1);
  }
}

const WINNING_COMBOS = {
  r:     ['scissors', 'lizard'],
  p:    ['rock',     'spock'],
  sc: ['paper',    'lizard'],
  l:   ['paper',    'spock'],
  sp:    ['rock',     'scissors'],
};

const LOSING_COMBOS = {
  r: ['paper','spock'],
  p: ['scissors','lizard'],
  sc: ['rock','spock'],
  l: ['rock','scissors'],
  sp: ['paper','lizard'],
};

function playerWins(answer, computerChoice) {
  return WINNING_COMBOS[answer].includes(computerChoice);
}

function playerLoses(answer, computerChoice) {
  return LOSING_COMBOS[answer].includes(computerChoice);
}

function displayWinner(answer, computerChoice) {
  prompt(`You chose: ${validChoices[answer]}. Computer chose: ${computerChoice}`);

  if (playerWins(answer, computerChoice) === true) {
    prompt(MESSAGE.win);
  } else if (playerLoses(answer, computerChoice) === true) {
    prompt(MESSAGE.lose);
  } else {
    prompt(MESSAGE.tie);
  }
}

let myWins = 0;
let computerWins = 0;

function displayTotalWins(answer,computerChoice) {
  if (playerWins(answer, computerChoice) === true) {
    myWins += 1;
  } else if (playerLoses(answer, computerChoice) === true) {
    computerWins += 1;
  }
  prompt(`My wins: ${myWins}. Computer wins: ${computerWins}`);
}

function getGrandWinner() {
  if (myWins > computerWins) {
    prompt(MESSAGE.grandWin);
  } else if (computerWins > myWins) {
    prompt(MESSAGE.grandLose);
  }
}

while ((myWins !== 3) || (computerWins !== 3)) {

  prompt(`Choose one: ${Object.values(validChoices).join(', ')}`);
  answer = readline.question();
  changeAnswer();

  while (!(Object.keys(validChoices).includes(answer))) {
    prompt(`Enter one of the following: ${Object.values(validChoices).join(', ')}`);
    answer = readline.question();
    changeAnswer();
  }

  let computerValue = Object.values(validChoices);
  let computerIndex = Math.floor(Math.random() * computerValue.length);
  let computerChoice = computerValue[computerIndex];

  displayWinner(answer,computerChoice);
  displayTotalWins(answer,computerChoice);

  if (myWins === 3) break;
  if (computerWins === 3) break;

}
getGrandWinner();