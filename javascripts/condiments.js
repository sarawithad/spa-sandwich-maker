// This SandwichMaker IIFE augments the original one
console.log("condiments")

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrice = {
  	mayo: 0.25,
  	mustard: 0.25,
  	vinegar: 0.25,
  	avocado: 1.00
  };

  // Augment the original object with another method
  maker.getCondimentPrices = function(condiments) {
  	var totalPrice = 0;
  	for (i=0; i < condiments.length; i++) {
  		totalPrice += condimentsPrice[condiments[i]];
   		console.log("condimentsPrice[condiments[i]]", condimentsPrice[condiments[i]])
  	}
  	console.log("totalPrice", totalPrice)
    return totalPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
