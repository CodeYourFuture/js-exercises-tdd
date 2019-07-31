let removeMiddle = remove => {
  var index = remove.indexOf("queen");

  if (index > -1) {
    return remove.splice(index, 1);
  }
};

module.exports = removeMiddle;
