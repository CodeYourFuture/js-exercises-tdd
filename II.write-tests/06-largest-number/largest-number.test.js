var getLargestNumber = require("./largest-number");
test("Get the largest number from the array", function() {
    // Arrange
    var array = [3, 21, 88, 4, 36];
    var originalArray = array.slice();
    // Act 
    var result = getLargestNumber(array);

    // Assert
    var expected = 88;
    expect(result).toEqual(expected);
    expect(array).toEqual(originalArray);
});