// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
const getEven = require('./get-even-numbers');
const result = getEven([22, 13, 73, 82, 4]);
test('should get even numbers from an array of numbers',
    () => expect(result).toEqual([22, 82, 4])
);