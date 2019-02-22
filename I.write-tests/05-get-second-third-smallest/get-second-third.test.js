var getSecondAndThird = require("./get-second-third");

test("Get second and third numbers", function() {
  //Arrange
  var numbers = [90, 5, 11, 8, 6];
  var unchanged = [90, 5, 11, 8, 6];
  var expected = [6, 8];

  //Act
  const result = getSecondAndThird(numbers);

  //Assert
  expect(result).toEqual(expected);
  expect(numbers).toEqual(unchanged);
});

// also test that the original array has not changed
