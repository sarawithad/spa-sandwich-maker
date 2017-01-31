// This SandwichMaker IIFE augments the original one
console.log("cheese")


var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrice = {
  	provolone: 1.00,
  	american: 1.00,
  	pepperjack: 1.00,
  	cheddar: 1.00
  };

  // Augment the original object with another method
  maker.getCheesePrices = function(cheese) {
  	var totalPrice = 0;
  	for (i=0; i < cheese.length; i++) {
  		totalPrice += cheesePrice[cheese[i]];
  		console.log("cheesePrice[cheese[i]]", cheesePrice[cheese[i]])
  	}
  	return totalPrice;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
