
test("get second third", function () {
    // Arrange
    var getSecondThird = require("./get-second-third");

    // Act
    var res = getSecondThird([90, 5, 11, 8, 6]);
    // Assert
    expect(res).toEqual(6, 8);
});



// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed