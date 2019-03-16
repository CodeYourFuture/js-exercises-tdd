var addOne = require('./add-one.js');

test('Add 1 to each item in myArray', function () {
    const myArray = [31, 57, 12, 5];

    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const output = addOne(myArray);
    // const result = output;


    expect(output).toEqual(expected);
    expect(unchanged).toEqual(unchanged);
    // need to be explained how to return the array before the for each method
});