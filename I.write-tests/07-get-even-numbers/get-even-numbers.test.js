
test("get even numbers", function () {
    // Arrange
    var getEven = require("./get-even-numbers");

    // Act
    var res = getEven([22, 13, 73, 82, 4]);
    // Assert
    expect(res).toEqual([22, 82, 4]);
});




// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];