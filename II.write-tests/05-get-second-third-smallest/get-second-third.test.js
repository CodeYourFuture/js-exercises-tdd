// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
var getSecondAndThird = require("./get-second-third");
test("Get second and third elements from array", function() {
    // Arrange
    var array = [90, 5, 11, 8, 6];
    var originalArray = array.slice();
    // Act
    var result = getSecondAndThird(array);

    // Assert
    var expected = [6, 8];
    expect(result).toEqual(expected);
    expect(array).toEqual(originalArray);
});