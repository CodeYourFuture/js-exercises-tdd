module.exports = function (array) {
    var newArray = array.sort(function (x, y) {
        return x > y;
    });
    return [newArray[1], newArray[2]];
};