//variables declaration
const itemName = prompt("Enter the name of the item:");
let basePrice = Number(prompt("What is the base price of the item?"));
let blackFriday = prompt("Is today \"Black Friday\"? Answer yes or no.");
let searchEngine = prompt("Did the purchaser find the product through a search engine? Answer yes or no.");
let shoppingSite = prompt("Did the purchaser visit a comparison-shopping site? Answer yes or no.");
let finalPrice
let messageBlackFriday
let messageSearchEngine
let messageShoppingSite

//conditional statements
if (blackFriday == "yes") {
    finalPrice = basePrice*0.75;
    messageBlackFriday = alert(`The base price for the ${itemName} is $${basePrice}. 
    Since it's Black Friday, we will reduce the price by 25%. The final price is $${(finalPrice)}.`);
} else if (blackFriday == "no") {
    messageBlackFriday = alert(`It's not Black Friday, so the price didn't change for that. The final price is $${basePrice}.`);
    finalPrice = basePrice;
} else {
    alert("Error...Please refresh the page and start again.Thanks");
};

if (searchEngine == "yes") {
    finalPrice*=1.01;
    messageSearchEngine = alert(`The purchaser came through a search engine, so we will increase the price by 1% to pay the search engine. The final price is $${finalPrice}.`);
} else if (searchEngine == "no") {
    messageSearchEngine = alert(`The customer didn't use a search engine, so the price didn't change for that. The final price is $${finalPrice}.`);
} else {
    alert("Error...Please refresh the page and start again.Thanks");
};

if (shoppingSite == "yes") {
    finalPrice*=0.90;
    messageShoppingSite = alert(`Since the customer visited a comparison-shopping site, we will reduce the price by 10%. The final price is $${finalPrice}.`);
} else if (shoppingSite == "no") {
    messageShoppingSite = alert(`The customer didn't visit a comparison-shopping site, so the price didn't change for that. The final price is $${finalPrice}.`);
}

//display on WebPage
document.getElementById("final_price").innerHTML = `The base price for the ${itemName} is $${basePrice}.
Since it's Black Friday, we will reduce the price by 25%. We will increase the price by 1% to pay the search engine. 
Since the customer visited a comparison-shopping site, we will reduce the price by 10%. 
The final price is $${finalPrice.toFixed(2)}.`;


