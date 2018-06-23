var largest = require("./largest-number")

test("find largest number", function () {

    var input = [3, 21, 88, 4, 36];

    var result = largest(input);

    expect(result).toBe(88);





})







// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed