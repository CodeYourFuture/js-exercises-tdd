var { notNull, haveThisCriterias } = require("./password-verifier");

test("password should not be null", function() {
  var resultA = notNull(null);
  var resultB = notNull("");
  expect(resultA).toEqual(false);
  expect(resultB).toEqual(false);
});
test("password criterias", function() {
  var result1 = haveThisCriterias("1footBal");
  var result2 = haveThisCriterias("1%football"); //has no at least one uppercase letter//
  var result3 = haveThisCriterias("FOOTbALL/1");
  var result4 = haveThisCriterias("FOOTBALL/1"); //has no at least one lowercase letter//
  var result5 = haveThisCriterias("footBall@2");
  var result6 = haveThisCriterias("footBall@c"); //has no at least one number//
  var result7 = haveThisCriterias("2@foot&Ball"); 
  var result8 = haveThisCriterias("2fot&Ba");    // length less than 8 characters//

  expect(result1).toEqual(true);
  expect(result2).toEqual(false);
  expect(result3).toEqual(true);
  expect(result4).toEqual(false);
  expect(result5).toEqual(true);
  expect(result6).toEqual(false);
  expect(result7).toEqual(true);
  expect(result8).toEqual(false);
});
