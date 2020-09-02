const getSecondThird = require("./get-second-third")

test("Move the second to the third position", function () { 
    const input = [90, 5, 11, 8, 6],
    expected = [6, 8],
    result = getSecondThird(input)

    expect(result).toEqual(expected)
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
