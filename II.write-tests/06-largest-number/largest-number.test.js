var getLargestNumber = require("./largest-number")

test("obtain second largest number", () => {
    let input = [3, 21, 88, 4, 36];
    let output = 88;

    expect(getLargestNumber(input)).toEqual(output)
})


// also test that the original array hasn't changed
