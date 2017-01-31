var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = {};

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }

  
}

})(SandwichMaker || {});