module.exports = function (array) {
    array.sort(function (x, y) {
        return x > y;
    });
    return [array[1], array[2]];
};