const add = require("./metodo_add");

test("1 step - test for contain 0, 1 or 2 numbers", function() {
  var input = ["", "4", "3,5"];
  expect(add(input[0])).toBe(0);
  expect(add(input[1])).toBe(4);
  expect(add(input[2])).toBe(8);
});

test("2 step - Test for an unknown amount of numbers", function() {
  var largeNumber = "1,5,34,565,34,22,1,765,75,1000";
  expect(add(largeNumber)).toBe(2502);
});

test("3 step - to handle new lines between numbers", function() {
  var severalSep = ["1\n2\n3", "1\n2,3"];
  expect(add(severalSep[0])).toBe(6);
  expect(add(severalSep[1])).toBe(6);
});

test("4 step - to handle different delimiters between numbers", function() {
  var differentDelimiters = [
    "//;\n1;2",
    "//*\n1*2*3",
    "//@\n1@2@3@4",
    "//\n12345"
  ];
  expect(add(differentDelimiters[0])).toBe(3);
  expect(add(differentDelimiters[1])).toBe(6);
  expect(add(differentDelimiters[2])).toBe(10);
  expect(add(differentDelimiters[3])).toBe(15);
});

test("5 step - test for negatives numbers", function() {
  var negativesNumbers = ["1,4,-1,5,-45", "-45"];
  expect(add(negativesNumbers[0])).toMatch(/negatives not allowed:/);
  expect(add(negativesNumbers[1])).toMatch(/negatives not allowed:/);
});

test("6 step - filter numbers bigger than 1000 ", function() {
  var bigNumbers = ["10,50,2000", "//!\n10!50!1000!1001"];
  expect(add(bigNumbers[0])).toBe(60);
  expect(add(bigNumbers[1])).toBe(1060);
});
