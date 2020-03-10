var removeVowels = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  // Arrange
  var input = ["Irina", "Etza", "Daniel"];
  var expected = ["rn", "tz", "Dnl"];
  // Act
  var result = removeVowels(input);
  // Assert
  expect(result).toEqual(expected);
});


// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

/*
test failed

the expected result is : ["rn", "tz", "Dnl"]

but we resived result :
+   "__i_a",
  +   "___a",
  +   "_a_ie_",

so that we have to check and fix our code
*/
