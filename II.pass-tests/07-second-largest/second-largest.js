module.exports = function (array) {
    
    array.sort(function (x, y) {
        return y-x;
    });
    return array[1];
};