// example
// input = [90, 5, 11, 8, 6];

var getSecondAndThird = require("./get-second-third");

// expected output = [6, 8];

test("returns second and third largest", function(){
    var input = [90, 5, 11, 8, 6];
    var result = getSecondAndThird(input);
    expect(result).toEqual([6,8]);
});

// also test that the original array has not changed

test("array does not change", function() {
    var input = [90, 5, 11, 8, 6];
    var originalInput = [90, 5, 11, 8, 6];
    
	var result = getSecondAndThird(input);
	expect(input).toEqual(originalInput);
});




