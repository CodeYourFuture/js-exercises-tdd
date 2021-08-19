function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return word.replace(/[aeiou]/gi, '')
  });

  return result;
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/

console.log("sdsdsd",removeVowelsForWords(["Irina", "Etza", "Daniel"]))