var {
    notNull,
    greaterThan8,
    haveUpperCaseLetter,
    haveLowerCaseLetter,
    haveNumber,
    isOK,
    mustHaveLowerCaseLetter
  } = require("./password2");

test("1. - password should be larger than 8 chars", function() {
	var result = greaterThan8("idam");
	var result2 = greaterThan8("isdflkdfsdlf");
    expect(result).toEqual(false);
    expect(result2).toEqual(true);
});

test("2. - password should not be null", function() {
	var result = notNull(null);
	var result2 = notNull("");
	expect(result).toEqual(false);
	expect(result2).toEqual(false);
});

test("3. - password should have one uppercase letter at least", function() {
	var result = haveUpperCaseLetter("Laf");
	var result2 = haveUpperCaseLetter("sfsfaf");
	expect(result).toEqual(true);
	expect(result2).toEqual(false);
});

test("4. - password should have one lowercase letter at least", function() {
	var result = haveLowerCaseLetter("sfaf");
	var result2 = haveLowerCaseLetter("324SSF");
	expect(result).toEqual(true);
	expect(result2).toEqual(false);
});

test("5. - password should have one number at least", function() {
	var result = haveNumber("4fd");
	var result2 = haveNumber("fddfd");
	expect(result).toEqual(true);
	expect(result2).toEqual(false);
});

test("Add feature: Password is OK if at least three of the previous conditions is true", function() {
	var result = isOK("d3");
	var result2 = isOK("dN");
	var result3 = isOK("dddf");
	expect(result).toEqual("Password is OK");
    expect(result2).toEqual("Password is OK");
    expect(result3).toEqual("Password is NOT OK");
});

test("Add feature: password is never OK if item 1.4 is not true.", function() {
	var result = mustHaveLowerCaseLetter("DFSF75");
	var result2 = mustHaveLowerCaseLetter("dsf");
	expect(result).toEqual("Not OK");
	expect(result2).toEqual("OK");
});