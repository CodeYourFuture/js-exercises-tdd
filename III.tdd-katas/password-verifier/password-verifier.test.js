var { notNull, haveThisCriterias }
 = require("./password-verifier");

test("password should not be null", function() {
  var resultA = notNull(null);
  var resultB = notNull("");
  expect(resultA).toEqual(false);
  expect(resultB).toEqual(false);
});
test("password criterias", function() {
  var result1 = haveThisCriterias("1%footBall");
  var result2 = haveThisCriterias("1%football");
  var result3 = haveThisCriterias("FOOTbALL/1");
  var result4 = haveThisCriterias("FOOTBALL/1");
  var result5 = haveThisCriterias("footBall@2");
  var result6 = haveThisCriterias("footBall@c");
  var result7 = haveThisCriterias("2@foot&Ball");
  var result8 = haveThisCriterias("2foot&Ball");

  expect(result1).toEqual(true);
  expect(result2).toEqual(false);
  expect(result3).toEqual(true);
  expect(result4).toEqual(false);
  expect(result5).toEqual(true);
  expect(result6).toEqual(false);
  expect(result7).toEqual(true);
  expect(result8).toEqual(false);
});
