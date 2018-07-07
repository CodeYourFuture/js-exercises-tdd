// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
test("Fnid the largest Number", function(){
    //Arrange
    var array = [3,21,88,4,36];
    getLargestNumber = require('./largest-number')
    //Act
    var result = getLargestNumber(array);
    // Assert
    expect(result).toEqual(88);
});

