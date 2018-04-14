function removeVowels(word) {
  var characters = word.toLowerCase().split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character !== "a" &&
      character !== "o" &&
      character !== "i" &&
      character !== "e" &&
      character !== "u" &&
      character !== "y" &&
      character !== "A" &&
      character !== "O" &&
      character !== "I" &&
      character !== "E" &&
      character !== "U" &&
      character !== "Y"
    ) {
      result.push(character);
    } else {
      result.push("");
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
