var removeVowels = require('./remove-vowels.js');

test("remove vowels from word", function() {
  
  var result = removeVowels('samuel');

  var expected = "_a_ue_";

  expect(result).toEqual(expected);
});
