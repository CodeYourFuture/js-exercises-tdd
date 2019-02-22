function findNeedle(words) {

    for (var i = 0 ; i<words.length ; i++){
        if (words[i].includes("needle")){
            return words.indexOf("needle");
        }
    }
}

module.exports = findNeedle;