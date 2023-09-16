//Write a function that determines and returns the UTF-16 string value of a 
//string passed in as an argument

function utf16Value(str) {
  let arr = str.split("").map(char => char.charCodeAt());
   let initialValue = 0;
   let sumOfArr = arr.reduce((accumulator,currentValue) => 
                                     accumulator + currentValue, initialValue);
   return sumOfArr;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0
