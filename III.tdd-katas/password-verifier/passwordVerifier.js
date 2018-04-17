class PasswordVerifier {
    Verify(password){
        return password.length > 8;
    }
}

let verifier = new PasswordVerifier();
module.exports = verifier.Verify;

let bool = verifier.Verify("Islamsfddf");
console.log(bool);

