function calculator(str) {
    if (str === "") return 0
    if (str.includes("\n")) {
        let arr = str.split(",").join("").split("\n").join("").split("")
        return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    } else {
        let split = str.split(",")
        if (split.every((num) => num > 0)) {
            return split.reduce((a, b) => b < 1000 ? parseInt(a) + parseInt(b) : parseInt(a) + 0, 0)
        } else {
            let negativeNumbers = split.filter(num => num < 0).join(" ")
            return `negatives not allowed:${negativeNumbers}`
        }
    }
}
module.exports = calculator;

console.log(calculator("999,2"))