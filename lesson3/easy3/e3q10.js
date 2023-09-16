//Write a function that takes a year as input and returns the century.
//The return value should be a string that begins with the century number,
//and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.


function century(num) {
  let cen = String(Math.ceil(num / 100));
  let lastDigit = cen[cen.length - 1];
  let lastTwoDigits = cen[cen.length - 2] + cen[cen.length - 1];
  while (!(lastTwoDigits === '11' ||
          lastTwoDigits === '12' ||
          lastTwoDigits === '13')) {
    if (lastDigit === '1') {
      return `${cen}st`;
    } else if (lastDigit === '2') {
      return `${cen}nd`;
    } else if (lastDigit === '3') {
      return `${cen}rd`;
    } else {
      return `${cen}th`;
    }
  }
  return `${cen}th`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
