//create function that takes one integer argument 
// can be positive, negative, or zero
// returns true if the numbers absolute value is odd 

function isOdd(integer) {
  return Math.abs(integer) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true