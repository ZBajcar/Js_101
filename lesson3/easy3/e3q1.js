//Write a function that takes a string argument and returns a new string 
//that contains the value of the original string with all consecutive duplicate 
//characters collapsed into a single character.

function crunch(str) {
  let index = 0;
  let empty = '';
  while (index < str.length) {
   if (str[index] !== str[index + 1]) {
    empty = empty + str[index];
  }
  index += 1;
}
return empty;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""