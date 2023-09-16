//Build a program that asks the user to enter the length and width of a room 
//in meters, and then logs the area of the room to the console in both 
//square meters and square feet.
//Note: 1 square meter == 10.7639 square feet
const readline = require("readline-sync");
let areaInMeter;
let areaInFeet;


function prompt(msg) {
  console.log("=>" + msg);
}

function meterToFeet(area) {
  areaInFeet = parseFloat(area * 10.7639);
  areaInFeet = areaInFeet.toFixed(2);
}

function getArea(width,length) {
 areaInMeter = width * length;
}

prompt("Enter the length of the room in meters:");
let lengthInMeters = readline.question();

prompt('Enter the windth of the room in meters:');
let widthInMeters = readline.question();

getArea(widthInMeters,lengthInMeters);
meterToFeet(areaInMeter);

prompt("The area of the room is" + ' ' + areaInMeter + ' ' + "square meters ("
                                        + areaInFeet + ' ' + "square feet).");
                                        


/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/