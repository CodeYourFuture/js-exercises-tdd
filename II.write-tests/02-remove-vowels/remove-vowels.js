function removeVowels(word) {
  return word.split("").map(x => x.replace(/a|o|i|e|u/gi, '')).join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
