function middle(arr) {
    const mid = Math.floor(arr.length / 2);
    return arr.splice(mid, 1);
}

module.exports = middle;