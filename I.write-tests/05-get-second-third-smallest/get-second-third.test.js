
var getSecond = require("../05-get-second-third-smallest/get-second-third")

test("sort the numbers in an array", function () {

    // Arrange

    var input = [90, 5, 11, 8, 6];

    //when

    var result = getSecond(input);

    //then
    expect(result).toEqual([6, 8]);

})





// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed