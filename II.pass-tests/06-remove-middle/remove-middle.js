module.exports = words => {
    const len = words.length;
    const midPoint = len / 2;
    return len > 1 && len % 2 == 0 ? words.splice(midPoint, 2) : words.splice(parseInt(midPoint), 1);
}