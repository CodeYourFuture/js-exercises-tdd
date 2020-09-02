var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function () {
    const input = [4, 10, 32, 9, 21],
        expected = [32, 21],
        result = largerThanTen(input)

    expect(result).toEqual(expected)
});


// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
