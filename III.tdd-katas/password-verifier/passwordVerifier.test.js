var verify = require("./passwordVerifier");

test("1. - password should be larger than 8 chars", function() {
	var result = verify("iSl5am");
	var result2 = verify("iSlasdfsm5");
    expect(result).toEqual(false);
    expect(result2).toEqual(true);
});

test("2. - password should not be null", function() {
	var result = verify(null);
	var result2 = verify("");
	expect(result).toEqual(false);
	expect(result2).toEqual(false);
});

test("3. - password should have one uppercase letter at least", function() {
	var result = verify("L5sfsfsfsfaf");
	var result2 = verify("5sfsfsfsfaf");
	expect(result).toEqual(true);
	expect(result2).toEqual(false);
});

test("4. - password should have one lowercase letter at least", function() {
	var result = verify("L5sfsfsfsfaf");
	var result2 = verify("5234324SFDSF");
	expect(result).toEqual(true);
	expect(result2).toEqual(false);
});

test("5. - password should have one number at least", function() {
	var result = verify("fdfdfgDd4fd");
	var result2 = verify("fdfdfgDdfd");
	expect(result).toEqual(true);
	expect(result2).toEqual(false);
});
