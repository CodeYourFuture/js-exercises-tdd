// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

var getSecond = require('./get-second-third.js');

test('get second third test'), () => {

var numberSecond = [90, 5, 11, 8, 6];

var result = getThird(numberSecond);

expect(result).toEqual([6, 8]);
}