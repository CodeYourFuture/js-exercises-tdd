function secondLargest(array) {
    let actualMax = Math.max(...array)
    let maxIndex = array.indexOf(actualMax)
    array.splice(maxIndex, 1)
    return Math.max(...array)
}

module.exports = secondLargest;