function removeMiddle(array) {
    if (array.length >= 3) {
        let index = (array.length - 1) / 2
        return array.splice(index, 1)
    } else { return "Can't work with such short array" }
}
module.exports = removeMiddle;
