// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

var getLargestNumber = require("./largest-number");

test("get the largest number in the array", function(){
    var input = [3, 21, 88, 4, 36];
    var output = 88;
    var result = getLargestNumber(input);
    expect(result).toEqual(output);
});

// also test that the original array hasn't changed
test("test the original array hasn't changed", function() {
	var input = [3, 21, 88, 4, 36];
	var original = [3, 21, 88, 4, 36];
	var result = getLargestNumber(input);
	expect(input).toEqual(original);
});