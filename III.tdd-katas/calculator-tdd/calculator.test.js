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

test("handle an unknown amount of numbers", function() {
	var result = add("2,4,5,6,7");
    expect(result).toEqual(24);
});

test("handle new lines between numbers", function() {
	var result = add("1\n2,3");
    expect(result).toEqual(6);
});

test("support different delimiters", function() {
	var result = add("//;\n1;2");
    expect(result).toEqual(3);
});

test("negatives not allowed", function() {
	var result = add("1,4,-1");
    expect(result).toEqual("negatives not allowed: -1");
});