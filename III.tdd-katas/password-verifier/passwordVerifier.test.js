var verify = require("./passwordVerifier");

test("1. - password should be larger than 8 chars", function() {
    var password = "islam234324"
	var result = verify(password);
	expect(result).toEqual(true);
});



