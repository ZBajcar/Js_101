//Build a program that randomly generates Teddy's age, 
//and logs it to the console. 
//Have the age be a random number between 20 and 120

function teddyAge() {
  let start = 20;
  let age = parseInt((Math.random() * 101),10);
  return start + age;
}

console.log(`Teddy is ${teddyAge()} years old!`);


//Teddy is 69 years old!