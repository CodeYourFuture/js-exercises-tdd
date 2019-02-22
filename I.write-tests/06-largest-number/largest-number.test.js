var getLargestNumber = require('./largest-number')
test('Return largest number', () => {
    const expecion = 88
    const result = getLargestNumber([3, 21, 88, 4, 36])
    expect(result).toEqual(expecion)
})
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed