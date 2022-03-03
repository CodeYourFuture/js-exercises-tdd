function passwordVerifier(password) {
    // let regexForDigits = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/
    let num = 0;
    let regexForCapital = /^.*(?=.*[A-Z]).*$/
    let regexForlower = /^.*(?=.*[a-z]).*$/
    let regexForatleast = /^.*(?=.{8,}).*$/
    let regexForDigits = /^.*(?=.*\d).*$/
    if(password==="") return false
    if (regexForCapital.test(password)) { num++; return true }
    if (regexForlower.test(password)) { num++; return true }
    if (regexForatleast.test(password)) {
        num += 2;
        return true
    }
    if (regexForDigits.test(password)) { num++; return true }

    if (!regexForlower.test(password)) {
        return "password is never OK"
    }
    if (num >= 3) {
        return "password is OK"
    } else {
        return "Password is not our standart"
    }

}

module.exports = passwordVerifier;

console.log(passwordVerifier("12aaA"))