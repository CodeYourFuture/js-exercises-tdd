function removeVowels(word) {
  const characters = word.split("")

  let result = []

  characters.forEach(function(character) {
    if (character.match(/[aeiou]/i)) {
      result.push(character.toLowerCase())
    } else {
      result.push("_")
    }
  })

  return result.join("")
}

console.log(removeVowels('Sherlock Holmes'))

module.exports = removeVowels

/*
  Let's trace this piece of code - what is the value of result with this input

  const result = removeVowels('samuel')

  what is the value of result?
*/
