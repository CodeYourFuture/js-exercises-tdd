module.exports = function (arrayToTranform, callbackTransformer) {
  return arrayToTranform.map(element => {
    return callbackTransformer(element);
  });
}
