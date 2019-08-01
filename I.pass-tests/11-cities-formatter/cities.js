function formatCitis(capitalsArray, printFunc) {
  let printedMessage = [];
  capitalsArray.forEach(capital => printedMessage.push(printFunc(capital)));

  return printedMessage;
}

module.exports = formatCitis;
