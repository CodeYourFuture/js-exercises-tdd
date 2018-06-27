var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  // Given
  var numbers = [4, 10, 32, 9, 21];

  // When
  var result = largerThanTen(numbers);

  // Then
  expect(result).toEqual([32, 21]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
