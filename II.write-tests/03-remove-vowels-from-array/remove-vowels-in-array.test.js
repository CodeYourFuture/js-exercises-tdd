const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var input = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
  var result = ["_r_n_", "_tz_", "D_n__l"];
  expect(input).toEqual(result);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
