// Create a Password verifications class called “PasswordVerifier”.
class PasswordVerifier {
    // 1. Add the following verifications to a master function called “Verify()”
    Verify(password){
        var result;
        if (password === null || password === "") {
			console.log("Password should not be null or empty");
            result = false;
		} else if(password.length < 8){
            console.log("Password must be larger than 8 chars");
            result = false;
        } else if(!password.match(/[A-Z]+/)){
            console.log("Password should have one uppercase letter at least");
            result = false;
        } else if(!password.match(/[a-z]+/)){
            console.log("Password should have one lowercase letter at least");
            result = false;
        } else if(!password.match(/\d+/)){
            console.log("Password should have one number at least");
            result = false;
        } else {
            result = true;
        }
        return result;
    }
}

let verifier = new PasswordVerifier();
module.exports = verifier.Verify;


