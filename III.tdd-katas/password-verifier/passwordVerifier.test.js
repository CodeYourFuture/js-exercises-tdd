var verify = require("./passwordVerifier");

test("1. - password should be larger than 8 chars", function() {
    var password = "islam";
	var result = verify(password);
	expect(result).toEqual(false);
});

test("2. - password should not be null", function() {
	var password = null;
	var result = verify(password);
	expect(result).toEqual(false);
});

