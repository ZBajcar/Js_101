//asks the user to enter an integer greater than 0
//ask whether the user wants to determine the sum or the product 
//of all numbers between 1 and the entered integer, inclusive
const readline = require("readline-sync");

let userInteger = readline.question("Please enter an integer greater than 0: ");
userInteger = parseInt(userInteger,10);

let sumOrProduct = readline.question
              ("Enter 's' to compute the sum, or 'p' to compute the product. ");


let product = 1;
function getProduct(num) {
  for (let count = 1; count <= userInteger; count += 1) {
    product = product * count; 
  }
  return product;
}

let sum = 0;
function getSum(num) {
  for (let count = 1; count <= userInteger; count += 1) {
    sum = sum + count; 
  }
  return sum;
}

if (sumOrProduct === 's') {
  console.log("The sum of the integers between 1 and " + userInteger + ' ' + 
                                            'is ' + getSum(userInteger) + '.');
} else if (sumOrProduct === 'p') {
  console.log("The product of the integers between 1 and " + userInteger + 
                                  ' ' + 'is ' + getProduct(userInteger) + '.');
}

/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
*/