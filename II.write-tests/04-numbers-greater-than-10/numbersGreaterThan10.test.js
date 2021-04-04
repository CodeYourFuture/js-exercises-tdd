const largerThanTen = require("./numbersGreaterThan10");

describe("Larger than ten function", function() {
  test("It ignores numbers less than 11", function() {
    const numbers = [1, 4, -3, 0, 10]
    const output = []

    expect(largerThanTen(numbers)).toEqual(output)
  })

  test("It ignores data types that are not numbers", function() {
    const arr = ['Hello', true, {}, '11', 100]
    const output = [100]

    expect(largerThanTen(arr)).toEqual(output)
  })

  test("It returns numbers greater than 10", function() {
    const numbers = [7, 15, 50, 100, 1500, 9]
    const output = [15, 50, 100, 1500]

    expect(largerThanTen(numbers)).toEqual(output)
  })
})

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
