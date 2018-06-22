

test('get the second and third smallest',function() {
    var getSecondAndThird = require('./get-second-third');
    var numbers = [90, 5, 11, 8, 6];
    var result = getSecondAndThird(numbers);
    expect(result).toEqual([6,8]); 
    //expect(numbers).toEqual([90,5,11,8,6]);
});// example
// input = 
// expected output = [6, 8];

// also test that the original array has not changed