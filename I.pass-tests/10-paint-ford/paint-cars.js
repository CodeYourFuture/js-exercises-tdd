function paintShop(arr) {
  var copyArr = JSON.parse(JSON.stringify(arr));

  copyArr.map(d => {
    if (d.make == "Ford") {
      return (d.colour = "Pink");
    }
  });
  return copyArr;
}

module.exports = paintShop;
