
function removeMiddle(words){
    var removed = words.splice(2, 1);
    return removed;
}

module.exports = removeMiddle;