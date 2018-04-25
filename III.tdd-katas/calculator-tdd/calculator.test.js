var add = require("./calculator");

test("empty string", () => {
	var result = add("");
    expect(result).toEqual(0);
});

test("has one number", () => {
	var result = add("2");
    expect(result).toEqual(2);
});

test("has two numbers", () => {
	var result = add("2,4");
    expect(result).toEqual(6);
});

test("handle an unknown amount of numbers", () => {
	var result = add("2,4,5,6,7");
    expect(result).toEqual(24);
});

test("handle new lines between numbers", () => {
	var result = add("1\n2,3");
    expect(result).toEqual(6);
});

test("support different delimiters", () => {
	var result = add("//;\n1;2");
    expect(result).toEqual(3);
});

test("negatives not allowed", () => {
	var result = add("1,-2,4,-1");
    expect(result).toEqual("negatives not allowed: -2,-1");
});

test("ignore big numbers", () => {
	var result = add("1,4,2003,1234,24,5");
    expect(result).toEqual(34);
});