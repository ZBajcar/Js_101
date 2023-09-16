//Log all even numbers from 1 to 99, inclusive, to the console, 
//with each number on a separate line

for (let count = 1; count < 100; count += 1) {
  if (count % 2 === 1) {
    continue;
  }
  console.log(count);
}