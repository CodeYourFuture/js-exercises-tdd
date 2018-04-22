var {
    add
  } = require("./calculator");

test("empty string", function() {
	var result = add("");
    expect(result).toEqual(0);
});

test("has one number", function() {
	var result = add("2");
    expect(result).toEqual(2);
});

test("has two numbers", function() {
	var result = add("2,4");
    expect(result).toEqual(6);
});