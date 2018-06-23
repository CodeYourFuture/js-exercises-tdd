
var evenNumber = require("./get-even-numbers");

test("get an even number", function () {

    var input = [22, 13, 73, 82, 4];

    var result = evenNumber(input);

    expect(result).toEqual([22, 82, 4]);




})





// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];