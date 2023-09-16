//Write a function that takes one argument, a positive integer, 
//and returns a string of alternating '1's and '0's, always starting with a '1'. 
//The length of the string should match the given integer.

function stringy(num) {
  let evenStr = '10'.repeat(num).slice(num);
  let oddStr = '01'.repeat(num).slice(num);
  if (num % 2 === 0) {
    console.log(evenStr);
  } else {
    console.log(oddStr);
  }
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"