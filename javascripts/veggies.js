// This SandwichMaker IIFE augments the original one
console.log("veggies")


var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrice = {
  	lettuce: 0.25,
  	tomato: 0.50,
  	onion: 0.25,
  	peppers: 0.50
  };

  // // Augment the original object with another method
  maker.getVeggiePrices = function(veggies) {
  	var totalPrice = 0;
  	for (i=0; i < veggies.length; i++) {
  		totalPrice += veggiesPrice[veggies[i]];
  		console.log("veggiesPrice[veggies[i]]", veggiesPrice[veggies[i]])

  	}
  	console.log("totalPrice", totalPrice)
    return totalPrice;
  };



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});