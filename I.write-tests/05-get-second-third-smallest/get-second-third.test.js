var getSecondThird= require('./get-second-third.js');
test('get second and third', function() {

var array= [90, 5, 11, 8, 6];
var result= getSecondThird(array);
expect(result).toEqual([6, 8]);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

