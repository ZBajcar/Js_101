//every year that is evenly divisible by 4
//unless the year is also divisible by 100
//if it is divisible by 100, then it is not a leap year, 
//unless the year is also evenly divisible by 400.
//Write a function that takes any year greater than 0

function isLeapYear(year) {
 while(year % 4 === 0) {
   if (year % 100 === 0 && year % 400 === 0) {
     return true;
   } else if (year % 100 === 0) {
     return false;
   } else if (year % 100 !== 0) {
     return true;
   } else {
     return false;
   }
 }
 if (year % 4 !== 0) {
   return false;
 }
}
 
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
