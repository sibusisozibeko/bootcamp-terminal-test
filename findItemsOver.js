module.exports = function findItemsOver(namePrice, threshold) {
  var comparedPrice = [];
  for (var i = 0; i < namePrice.length; i++) {
    var objAttr = namePrice[i];
    var thePriceObj = objAttr.qty;

    if (thePriceObj > threshold) {
      comparedPrice.push(objAttr)
    }
  }
  return comparedPrice;
}
