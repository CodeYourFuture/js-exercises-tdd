function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u" ||
      character === "A" ||
      character === "O" ||
      character === "I" ||
      character === "E" ||
      character === "U"
    ) {
      result.push("");
    } else {
      result.push(character);
    }
  });
  //so i expected "sml" but the code prints "_a_ue_" instead so line 9 and 11 needs to be swapped.

  return result.join(""); //join the array and rememeber to add ('') seperator to remove the default commas.
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
