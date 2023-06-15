import removeVowelsForWords from "./remove-vowels-in-array";
test("remove vowels from all words in array", function() {

  // Arrange
  var words = ["Anu", "Junita", "Saliha"];
  // Act
  var result = removeVowelsForWords(words);
  // Assert
  var expected = ["n","Jnt", "Slh"];
  expect(result).toEqual(expected);
});
// const removeVowelsForWords = require('./remove-vowels-in-array');

// test("remove vowels from all words in array", function() {
//   // Arrange
//   var words = ["Irina", "Etza", "Daniel"];

//   // Act
//   var result = removeVowelsForWords(words);

//   // Assert
//   var expected = ["rn", "tz", "Dnl"];
//   expect(result).toEqual(expected);
// });

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
