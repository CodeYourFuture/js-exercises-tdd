

function removeMiddle(words) {

    var result = [];
    var length = words.length;

    if (length % 2 !== 0) {

        var middle = Math.floor(length / 2);
        result.push(words[middle]);
        return words.splice(middle, 1)

    } else if (length % 2 === 0) {
        var mid = length / 2;
        result.push(words[mid]);
        return words.splice(mid, 1)
    }

    return result;
}
module.exports = removeMiddle