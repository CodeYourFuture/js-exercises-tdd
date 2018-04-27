var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundereds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var tousends = ["", "M", "MMM", "MMM"];
function convertToOldRoman(number) {
    var romanOnes=ones[number%10];
    var romanTens=tens[(number%100-number%10)/10];
    var romanHundereds=hundereds[(number%1000-number%100)/100];
    var romanTousends=tousends[(number%10000-number%1000)/1000];
    return romanTousends+romanHundereds+romanTens+romanOnes
}
module.exports = convertToOldRoman;
