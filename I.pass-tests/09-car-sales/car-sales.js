function sales(arr) {
  var holder = {};

  arr.forEach(d => {
    if (holder.hasOwnProperty(d.make)) {
      holder[d.make] = holder[d.make] + d.price;
    } else {
      holder[d.make] = d.price;
    }
  });

  return holder;
}

module.exports = sales;
