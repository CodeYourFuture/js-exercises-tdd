// example
// input = [4, 10, 32, 9, 21];
// expected output = [6, 8];

// also test that the original array has not changed
test("sort the array", function(){
    var getSecondThird = require('./get-second-third');
    var array = [90, 5, 11, 8, 6];
    var result  = getSecondThird(array);
    expect(result).toEqual(8,6);
});
