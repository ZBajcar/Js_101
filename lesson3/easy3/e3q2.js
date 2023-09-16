//Write a function that will take a short line of text, and write it
//to the console log within a box.

function logInBox(str) {
  let topBottom = `+${'-'.repeat(str.length + 2)}+`;
  let emptySpace = `|${' '.repeat(str.length + 2)}|`;
  
  console.log(topBottom);
  console.log(emptySpace);
  console.log(`| ${str} |`);
  console.log(emptySpace);
  console.log(topBottom);
}


logInBox('To boldly go where no one has gone before.');
logInBox('');

/*

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

+--+
|  |
|  |
|  |
+--+
*/