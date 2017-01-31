"use strict";

// console.log(SandwichMaker);

//when clicked, run this function
document.getElementById("submitButton").addEventListener("click", function(){

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;


//arrays that checked options will "push" into
var breadChecked = []; //bread chosen by user will go here
var meatChecked = []; //meat(s) chosen by user will go here
var cheeseChecked = []; //cheese(s) checked by user will go here
var veggiesChecked = []; //veggie(s) checked by user will go here
var condimentsChecked = []; //(s) condiments checked by user will go here

var bread = document.getElementsByClassName("bread"); //gets ingredient/options to iterate through
for (var i=0; i < bread.length; i++) { //iterates through bread options
	if (bread[i].checked === true) { //if option it lands on is checked then push into appropriate array(breadChecked)
		breadChecked.push(bread[i].value) //pushes checked items into array
	}
	var selectedBread = SandwichMaker.getBreadPrices(breadChecked) //augmenting original IIFE--then envoking function from bread page
};

var meat = document.getElementsByClassName("meat"); //gets ingredient/options to iterate through
for (var i=0; i < meat.length; i++) { //iterates through meat options
	if (meat[i].checked === true) { //if option it lands on is checked then push into appropriate array(meatChecked)
		meatChecked.push(meat[i].value) //pushes checked items into array
	}
	var selectedMeat = SandwichMaker.getMeatPrices(meatChecked) //augmenting original IIFE--then envoking function from meat page
};

var cheese = document.getElementsByClassName("cheese"); //gets ingredient/options to iterate through
for (var i=0; i < cheese.length; i++) { //iterates through cheese options
	if (cheese[i].checked === true) { //if option it lands on is checked then push into appropriate array(cheeseChecked)
		cheeseChecked.push(cheese[i].value) //pushes checked items into array
	}
	var selectedCheese = SandwichMaker.getCheesePrices(cheeseChecked) //augmenting original IIFE--then envoking function from cheese page
};


var condiments = document.getElementsByClassName("condiments"); //gets ingredient/options to iterate through
for (var i=0; i < condiments.length; i++) { //iterates through condiment options
	if (condiments[i].checked === true) { //if option it lands on is checked then push into appropriate array(condimentsChecked)
		condimentsChecked.push(condiments[i].value) //pushes checked items into array
	}
	var selectedCondiments = SandwichMaker.getCondimentPrices(condimentsChecked) //augmenting original IIFE--then envoking function from condiments page
};


var veggies = document.getElementsByClassName("veggies"); //gets ingredient/options to iterate through
for (var i=0; i < veggies.length; i++) { //iterates through veggie options
	if (veggies[i].checked === true) { //if option it lands on is checked then push into appropriate array(veggiesChecked)
		veggiesChecked.push(veggies[i].value) //pushes checked items into array
	}
	var selectedVeggies = SandwichMaker.getVeggiePrices(veggiesChecked) //augmenting original IIFE--then envoking function from veggies page
};


//puts final cost of sandwich in output area once button is clicked and function above runs--uses var names to get result of function for each
document.getElementById("totPriceOutput").innerHTML = `<h3>Your sandwich costs: $ ${(selectedBread + selectedMeat + selectedCheese + selectedCondiments + selectedVeggies).toFixed(2)}</h3>`;
});


 







