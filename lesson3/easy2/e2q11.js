//Write a function that takes a non-empty string argument and returns 
//the middle character(s) of the string. 
//If the string has an odd length, you should return exactly one character. 
//If the string has an even length, you should return exactly two characters.

function centerOf(str) {
  if (str.length % 2 === 1) {
    let centerIndex = (str.length - 1) / 2;
    return str[centerIndex];
  } else {
    let leftIndex = str.length / 2 - 1;
    return str[leftIndex] + str[leftIndex + 1];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"