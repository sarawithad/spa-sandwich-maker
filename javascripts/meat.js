// This SandwichMaker IIFE augments the original one

var SandwichMaker = (function(maker){

  // Private variable to store the different meat prices
  var meatPrice = {
  	ham: 2.00,
  	turkey: 2.00,
  	bacon: 2.50
  };

  // Augment the original object with another method
  maker.getMeatPrices = function(meat) {
  	var totalPrice = 0; //total price is $0 until for loop runs and options are iterated through
  	for(i=0; i < meat.length; i++) { //iterate through options to get price
  		totalPrice += meatPrice[meat[i]]; //add price of meat to the totalPrice to get the new totalPrice
  		// console.log("meatPrice[meat[i]]", meatPrice[meat[i]])
    }
    // console.log("totalPrice", totalPrice)
    return totalPrice; //gives you the totalPrice from the function above
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});


