var words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];

function removeMiddle(arr) {
    // return arr.slice(2, 3);
    return (arr.splice(2, 1));

    // console.log(arr.slice(2, 3));
}

removeMiddle(words);

module.exports = removeMiddle;