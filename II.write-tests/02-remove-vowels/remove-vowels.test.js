const removeVowels = require('./remove-vowels')

describe("Remove vowels function", function() {
  test("It replaces consonants with underscores", function() {
    const jumbledWords = 'rhythm glyphs'
    const output = '_____________'

    expect(removeVowels(jumbledWords)).toEqual(output)
  });

  test("It returns letter in word if vowel", function() {
    const word = 'EUOUAE'
    const output = 'euouae'

    expect(removeVowels(word)).toEqual(output)
  })

  test("It returns consonants and vowels", function() {
    const name = 'Sherlock Holmes'
    const output = '__e__o____o__e_'

    expect(removeVowels(name)).toEqual(output)
  })

})
