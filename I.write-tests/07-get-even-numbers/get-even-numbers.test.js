var getEven = require('./get-even-numbers')
test('Return even numbers', () => {
    const expecion = [22, 82, 4]
    const result = getEven([22, 13, 73, 82, 4])
    expect(result).toEqual(expecion)
})
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];