const removeVowels = require("./remove-vowels");

test("remove vowels from word", function () {
  // Arrange
  const name = "samuel";
  const name1 = "omar";
  const name2 = "Kadir"
  const expectation = "sml";
  const expectation1 = "mr"
  const expectation2 = "kdr"
  // Act
  var result = removeVowels(name);
  var result1 = removeVowels(name1)
  var result2 = removeVowels(name2)
  //Assert
  expect(result).toEqual(expectation);
  expect(result1).toEqual(expectation1);
  expect(result2).toEqual(expectation2);
});
