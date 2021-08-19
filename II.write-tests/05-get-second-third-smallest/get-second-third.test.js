var secondThird = require("./get-second-third");

test("second third", () => {
    let input = [90, 5, 11, 8, 6];
    let output = [6, 8];

    expect(secondThird(input)).toEqual(output)
})

// also test that the original array has not changed
