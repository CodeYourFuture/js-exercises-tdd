var add = require("./calculator");
test("sum string numbers", function() {
  var a = "1";
  var b = "2";
  var result = add(a, b);
  expect(result).toBe("1, 2");
});
