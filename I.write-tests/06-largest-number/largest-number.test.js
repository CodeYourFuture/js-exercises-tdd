// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

var getLargestNumber= require('./largest-number.js');
test('get largest number', function() {
var largestNumber= [3, 21, 88, 4, 36];
var result= getLargestNumber(largestNumber);
expect(result).toBe(88);
});