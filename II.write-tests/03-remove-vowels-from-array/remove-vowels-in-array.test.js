var removeVowelsForWords = require('./remove-vowels-in-array.js')

test("remove vowels from all words in array", function() {

  var result = removeVowelsForWords(["Irina", "Etza", "Daniel"]);

  var expected = ["rn", "tz", "Dnl"];

  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
