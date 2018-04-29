var getEvenNum = require('./get-even-numbers');
test('get even number', function(){
    var array = [22, 13, 73, 82, 4];
    var result = getEvenNum(array);
    expect(result).toEqual([22, 82, 4]);

})



// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];