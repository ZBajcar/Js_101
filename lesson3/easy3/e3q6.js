const readline = require('readline-sync');

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up blue Joe's turtle.`);

/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/