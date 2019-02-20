function removeVowels(word) {
  var characters = word.split("");
  //const vowelLetters = ["a", "A","o","O","i","I","e","E","u","U","y","Y"];
  var result = [];

  //   characters.forEach(function(character) {
  //    // if (vowelLetters.includes(character))
  //    if (vowelLetters.includes(character)) {
  //       result.push("");
  //     } else {
  //       result.push(character.toLowerCase());
  //     }
  //   });
  characters.forEach(function(character) {
    character = character.toLowerCase();
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u" ||
      character === "y"
    ) {
      return result.push("");
    } else {
      result.push(character);
    }
  });
  console.log(characters);
  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
