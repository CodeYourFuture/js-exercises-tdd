var convertToOldRoman = require("./roman-converter");
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(5)).toEqual("V");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(4)).toEqual("IV");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(9)).toEqual("IX");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(14)).toEqual("XIV");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(44)).toEqual("XLIV");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(99)).toEqual("XCIX");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(400)).toEqual("CD");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(944)).toEqual("CMXLIV");
});
test("this is a funtion which can change from arabic numbers to roman numbers beetwen 1 to 3999 ", () => {
  expect(convertToOldRoman(3999)).toEqual("MMMCMXCIX");
});
