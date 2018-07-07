// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
test('get even bnubers', function(){
    //Arrange
    var numbers = [22, 13, 73, 82, 4];
    var getEven = require('./get-even-numbers');
    //Act
    var result = getEven(numbers);
    // Assert
    expect(result).toEqual([22,82,4]);
    
});