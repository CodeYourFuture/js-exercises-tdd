let getEven = require("./get-even-numbers")

test("get even numbers", () => {
    let input = [22, 13, 73, 82, 4];
    let output = [22, 82, 4];

    expect(getEven(input)).toEqual(output)
})

