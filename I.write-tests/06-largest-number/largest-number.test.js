// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

const getLargestNumber = require("./largest-number");
let input = [3, 21, 88, 4, 36];
// const inputLenInital = input.length;
let result = getLargestNumber(input);
// const inputLenAfterPassed = input.length;

test('should get second and third higerst numbers', () => {
    expect(result).toEqual(88);
});
// also test that the original array has not changed
test('should not change original input array', () => {
    // expect(inputLenAfterPassed).toBe(inputLenInital);
    expect(input).toEqual([3, 21, 88, 4, 36]);
});