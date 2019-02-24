convertToOldRoman = (n) => {
        let lookup = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }, roman = '';
        for (i in lookup) {
            while (n >= lookup[i]) {
                roman += i;
                n -= lookup[i];
            }
        }
        return roman;
    }


convertToNewRoman = (n) => {
    let lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '';
    for (i in lookup) {
        while (n >= lookup[i]) {
            roman += i;
            n -= lookup[i];
        }
    }
    return roman;
}


module.exports = {convertToNewRoman, convertToOldRoman}
