var sortArray = require('./get-second-third')

test('Sort array and get first 2 elements', function(){
    var arr = [90, 5, 11, 8, 6];
    
    var result = sortArray(arr)

    var expected = [6, 8];

    expect(result).toEqual(expected);
    expect(arr).toEqual([90, 5, 11, 8, 6]);
}
);
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
