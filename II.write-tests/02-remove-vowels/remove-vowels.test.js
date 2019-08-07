var removeVowels = require("./remove-vowels");

test('Remove vowels, add "_".', function() {
  var result = removeVowels("Samuel");

  expect(result).toBe("_a_ue_");
});

// test('Input number', function() {

// });
