class PasswordVerifier {
    Verify(password) {
        function notNull(password) {
            if (password === null || password === "") {
                console.log("Password should not be null or empty");
                return false;
            }
            return true;
        }
        function greaterThan8(password){
            if(password.length < 8){
                console.log("Password must be larger than 8 chars");
                return false;
            } 
            return true;
        }
        function haveUpperCaseLetter(password){
            if(!password.match(/[A-Z]+/)){
                console.log("Password should have one uppercase letter at least");
                return false;
            }
            return true;
        }
        function haveLowerCaseLetter(password){
            if(!password.match(/[a-z]+/)){
                console.log("Password should have one lowercase letter at least");
                return false;
            }
            return true;
        }
        function haveNumber(password){
            if(!password.match(/\d+/)){
                console.log("Password should have one number at least");
                return false;
            }
            return true;
        }

        return notNull(password) 
        && greaterThan8(password) 
        && haveUpperCaseLetter(password) 
        && haveLowerCaseLetter(password) 
        && haveNumber(password);
    }
}

let verifier = new PasswordVerifier();
module.exports = verifier.Verify;
