//Write a function that determines the mean (average) of the three scores 
//passed to it, and returns the letter associated with that grade.
//Numerical score letter grade list:
/*
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
*/

function getGrade(grade1,grade2,grade3) {
  const NUMBER_OF_GRADES = 3;
  let score = (grade1 + grade2 + grade3) / NUMBER_OF_GRADES;
  if (score >= 0 && score < 60) {
    return 'F';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"