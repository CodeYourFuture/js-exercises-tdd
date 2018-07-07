function removeMiddle(words) {
    var pos = words.length/2;
    return words.splice(pos,1);
   }
   
   module.exports = removeMiddle;