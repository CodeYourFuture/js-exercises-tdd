var intAdd = require("./calculator");
test("this is suming numbers", () => {
  expect(intAdd("4,5,7,45")).toEqual(61);
});
test("this is suming numbers", () => {
  expect(intAdd("")).toEqual(0);
});
test("this is suming numbers", () => {
  expect(intAdd("5\n2")).toEqual(7);
});
test("this is suming numbers", () => {
  expect(intAdd("5\n2,\n")).toEqual(7);
});
test("this is suming numbers", () => {
  expect(intAdd("//+=\n5+=2")).toEqual(7);
});

test("this is suming numbers", () => {
  expect(intAdd("//+++\n4+++100+++20")).toEqual(124);
});
test("this is suming numbers", () => {
  expect(intAdd("//+++\n4+++100+++20")).toEqual(124);
});
test("this is suming numbers", () => {
  expect(intAdd("//+++\n4+++-100+++-20")).toEqual('negatives not allowed: -100,-20');
});
