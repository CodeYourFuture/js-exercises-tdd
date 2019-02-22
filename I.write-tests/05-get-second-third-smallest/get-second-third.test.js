var getSecThird = require('./get-second-third')
test('Return second and third item from an array and check original array', () => {
    const expecion1 = [6, 8, [90, 5, 11, 8, 6]]
    const exeption2 = [90, 5, 11, 8, 6]
    const result = getSecThird(exeption2)
    expect(result).toEqual(expecion1)
    // expect().toEqual()
})
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed