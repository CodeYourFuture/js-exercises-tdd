var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
    var input = [4, 10, 32, 9, 21];
    let output = [32, 21];


    expect(largerThanTen(input)).toEqual(output)
});


