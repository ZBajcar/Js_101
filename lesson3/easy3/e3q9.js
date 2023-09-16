//write a function that returns that string with all of the non-alphabetic 
//characters replaced by spaces
function lastChar(text) {
  return text[text.length - 1];
}

function cleanUp(str) {
  let empty = '';
  for (let index = 0; index < str.length; index += 1)
   if (str[index].toLowerCase() !== str[index].toUpperCase()) {
    empty = empty + str[index];
   } else if (lastChar(empty) !== ' ') {
      empty = empty + ' ';
   }
   return empty;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "