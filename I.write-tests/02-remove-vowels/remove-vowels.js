function removeVowels(word) {
  var characters = word.split("");
  var result = [];
  characters.forEach(function (character) {
    character = character.toLowerCase();
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u"
    ) {
      result.push("");
    } else {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

