function findNeedle(words) {
    let result;
    const lookForWords = ["needle", "plant"]
    words.forEach((element, index) => {
        lookForWords.includes(element) ? result = index : "Not found"
    });
    return result
}

module.exports = findNeedle;
