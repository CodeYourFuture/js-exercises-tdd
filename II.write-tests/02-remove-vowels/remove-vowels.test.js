var removeVowels = require('./remove-vowels.js');

test("remove vowels from word", function() {
  
  var result = removeVowels('samuel');

  var expected = "sml";

  expect(result).toEqual(expected);
});
