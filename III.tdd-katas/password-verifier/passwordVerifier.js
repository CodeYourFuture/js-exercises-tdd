class PasswordVerifier {
    Verify(password){
        if (password === null || password === "") {
			console.log("Password should not be null or empty");
			return false;
		} else if(password.length < 8){
            console.log("Password must be larger than 8 chars");
            return false;
        } else {
            return true;
        }

    }
}

let verifier = new PasswordVerifier();
module.exports = verifier.Verify;

let bool = verifier.Verify("dsf");
console.log(bool);

