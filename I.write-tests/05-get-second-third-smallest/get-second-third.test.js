// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];
const getSecondThird = require('./get-second-third');
let input = [90, 5, 11, 8, 6];
// const inputLenInital = input.length;
let result = getSecondThird(input);
// const inputLenAfterPassed = input.length;

test('should get second and third higerst numbers', () =>{
    expect(result).toEqual([6, 8]);
});
// also test that the original array has not changed
test('should not change original input array', () => {
    // expect(inputLenAfterPassed).toBe(inputLenInital);
    expect(input).toEqual([90, 5, 11, 8, 6]);
});