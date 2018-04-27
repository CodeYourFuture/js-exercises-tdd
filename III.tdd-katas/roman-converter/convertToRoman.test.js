var {convertToOldRoman, convertToNewRoman} = require("./convertToRoman");

test("should return Roman OLD string: 4 = IIII", () => {
	var result = convertToOldRoman(4);
    expect(result).toEqual("IIII");
});

test("7", () => {
	var result = convertToOldRoman(7);
    expect(result).toEqual("VII");
});

test("15", () => {
	var result = convertToOldRoman(15);
    expect(result).toEqual("XV");
});

test("18", () => {
	var result = convertToOldRoman(18);
    expect(result).toEqual("XVIII");
});

test("22", () => {
	var result = convertToOldRoman(22);
    expect(result).toEqual("XXII");
});

////////////////////////////////////////////////////////////

test("should return Roman NEW string: 4 = IV", () => {
	var result = convertToNewRoman(4);
    expect(result).toEqual("IV");
});

test("9", () => {
	var result = convertToNewRoman(9);
    expect(result).toEqual("IX");
});

test("14", () => {
	var result = convertToNewRoman(14);
    expect(result).toEqual("XIV");
});

test("44", () => {
	var result = convertToNewRoman(44);
    expect(result).toEqual("XLIV");
});

test("99", () => {
	var result = convertToNewRoman(99);
    expect(result).toEqual("XCIX");
});

test("400", () => {
	var result = convertToNewRoman(400);
    expect(result).toEqual("CD");
});

test("944", () => {
	var result = convertToNewRoman(944);
    expect(result).toEqual("CMXLIV");
});