function notNull(password) {
    if (password === null || password === "") {
        console.log("Password should not be null or empty");
        return false;
    }
    return true;
}

function greaterThan8(password){
    if(password.length <= 8){
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

function isOK(password){
    if(haveLowerCaseLetter(password) && notNull(password) && (greaterThan8(password) || haveUpperCaseLetter(password) || haveNumber(password))){
        return "Password is OK";
    }
    return "Password is NOT OK";
}

function mustHaveLowerCaseLetter(password){
    if(!haveLowerCaseLetter(password)){
        return "Not OK";
    }
    return "OK";
}

module.exports = {
    notNull,
    greaterThan8,
    haveUpperCaseLetter,
    haveLowerCaseLetter,
    haveNumber,
    isOK,
    mustHaveLowerCaseLetter
  };

// 4. Assume Each verification takes 1 second to complete. How would you solve  items 2 and 3  so tests can run faster?
// I would use third party testing library where I can fake the time and set it however I want it to.

