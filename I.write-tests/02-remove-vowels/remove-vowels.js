function removeVowels(word) {
  word = word.toLowerCase();
  var characters = word.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var result = [];
  result = characters.filter(letter => vowels.indexOf(letter) < 0).join("");
  return result;
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
