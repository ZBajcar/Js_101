//Write a function that takes two strings as arguments
//determines the length of the two strings
//returns the result of concatenating the shorter string, the longer string, 
//and the shorter string once again
function shortLongShort(str1,str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else if (str1.length > str2.length) {
    return str2 + str1 + str2;
  }
} 

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
