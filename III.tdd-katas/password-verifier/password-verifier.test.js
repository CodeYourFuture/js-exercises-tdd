var verify = require("./password-verifier");

test("is it correct password", function() {
  var result = verify("HelloWorld1");
  console.log(verify("HelloWorld1"));
  expect(result).toEqual("The password is valid!");
});

test("is it correct password", function() {
  var result = verify("helloworld1");
  console.log(verify("helloworld1"));
  expect(result).toEqual(
    "It doesn't have an upper case. But the password is valid!"
  );
});
test("is it correct password", function() {
  var result = verify("");
  console.log(verify(""));
  expect(result).toEqual("Please write a password! The password isn't valid!");
});
test("is it correct password", function() {
  var result = verify("HELLOWORD");
  console.log(verify("HELLOWORD"));
  expect(result).toEqual(
    "It doesn't have an lower case. It doesn't have an number. The password isn't valid!"
  );
});
test("is it correct password", function() {
  var result = verify("aB2");
  console.log(verify("aB2"));
  expect(result).toEqual(
    "It is lesser than 8 characters. But the password is valid!"
  );
});
test("is it correct password", function() {
  var result = verify("a1");
  console.log(verify("a1"));
  expect(result).toEqual(
    "It is lesser than 8 characters. It doesn't have an upper case. But the password is valid!"
  );
});
