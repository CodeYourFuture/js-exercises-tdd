function removeMiddle(words){
    var indexOfMiddle=(words.length/2).toFixed(0)-1;
    var newArray=[];
    newArray.push(words[indexOfMiddle]);
    words.splice(indexOfMiddle, 1);
    return newArray;
}

module.exports = removeMiddle;
