//Write a function that returns the number provided as an argument 
//multiplied by two, 
//unless the argument is a double number; return the double number as-is.

function twice(num) {
  num = String(num);
  let first = num.slice(0, num.length / 2);
  let second = num.slice(num.length / 2, num.length);
  if (first === second) {
    return Number(num);
  } else {
    return Number(num) * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
