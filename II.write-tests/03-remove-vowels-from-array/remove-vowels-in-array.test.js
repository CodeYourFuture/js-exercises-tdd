var removevow = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var array1 = ["Irina", "Etza", "Daniel"];
  var result = removevow(array1);
  expect(result).toEqual(["rn", "tz", "Dnl"]);
  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
