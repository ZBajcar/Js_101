//Write a function that takes a positive integer, n, as an argument 
//and logs a right triangle whose sides each have n stars

function triangle(n) {
  for (let count = 1; count <= n; count += 1) {
    console.log(' '.repeat(n - count) + '*'.repeat(count));
  }
}

triangle(5);
triangle(9);

/*
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/