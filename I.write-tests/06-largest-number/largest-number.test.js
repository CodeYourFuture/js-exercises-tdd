var largerNunmber = require('./largest-number');
test('larger number', function() {
    var array = [3, 21, 88, 4, 36];
    var result = largerNunmber(array);
    expect(result).toEqual(88);
})





// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed