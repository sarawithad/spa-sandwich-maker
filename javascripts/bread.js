// This SandwichMaker IIFE augments the original
var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrice = {
  	white: 2.00,
  	wheat: 2.00,
   };

  // Augment the original object with another method
  maker.getBreadPrices = function(bread) {
    var totalPrice = 0;
    for (i=0; i < bread.length; i++) {
      totalPrice += breadPrice[bread[i]];
      console.log("breadPrice[bread[i]]", breadPrice[bread[i]])
    }
    console.log("totalPrice", totalPrice)
    return totalPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
