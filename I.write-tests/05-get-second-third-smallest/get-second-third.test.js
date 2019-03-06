// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

const getSecondThird = require("./get-second-third");

test("Gets second and third largetst number from an array", function() {
  //Arrange
  var myArray = [90, 5, 11, 8, 6];
  var expectation = [6, 8];

  //Act
  const result = getSecondThird(myArray);

  //Assert
  expect(result).toEqual(expectation);
});

test("Original array remains unchanged", function() {
  //Arrange
  var myArray = [90, 5, 11, 8, 6];
  var expectation = [90, 5, 11, 8, 6];

  //Act
  var newArray = getSecondThird(myArray);
  const result = myArray;

  //Assert
  expect(result).toEqual(expectation);
});
