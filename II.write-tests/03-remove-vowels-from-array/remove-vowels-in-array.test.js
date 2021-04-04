const removeVowelsForWords = require('./remove-vowels-in-array')

describe("Remove Vowels For Words function", function() {
  test("It removes all vowels from words", function() {
    const words = ['Irina', 'Etza', 'Daniel']
    const output = ['rn', 'tz', 'Dnl']

    expect(removeVowelsForWords(words)).toEqual(output)
  })

  test("It is case insensitive when removing vowels", function() {
    const words = ['HAPPY', 'GO', 'LIVE']
    const output = ['HPPY', 'G', 'LV']

    expect(removeVowelsForWords(words)).toEqual(output)
  })

  test("It retains consonants", function() {
    const words = ['rhythm', 'blues', 'crypts']
    const output = ['rhythm', 'bls', 'crypts']

    expect(removeVowelsForWords(words)).toEqual(output)
  })
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
