function removeVowelsForWords(words) {
  const regex = /[aeiou]/gi

  return words.map(word => word.replace(regex, ''))
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
