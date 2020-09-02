const getEvenNumbers = require("./get-even-numbers")

test("the even number", function () {
    const input = [22, 13, 73, 82, 4],
        expected = [22, 82, 4],
        result = getEvenNumbers(input)
    expect(result).toEqual(expected)
})

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
