const largestNumber = require("./largest-number")
test("Return the largest Number", function () {
    const input = [3, 21, 88, 4, 36],
        expected = 88,
        result = largestNumber(input)
    expect(result).toEqual(expected)
})
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
