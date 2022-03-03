function paintShop(cars) {
    let copy = JSON.parse(JSON.stringify(cars));
  copy.forEach(a => {
    if (a.make === "Ford") {
      return (a.colour = "Pink");
    }
  });
  return copy;
}

module.exports = paintShop;