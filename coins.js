// Write a program that will convert a dollar amount to the number of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.

// 1. Grab the input from the user and save it to variable.
// 2. Subtract .25 from the amount.
//		a. if the amount is still greater than .25, then do it again.  
//			keep track of the number of times it loops on .25.
//		b. if the amount is still greater than .25, then move on.
// 3. Subtract .10 from the amount.
//		a. if the amount is still greater than .10, then do it again.  
//			keep track of the number of times it loops on .10.
//		b. if the amount is still greater than .10, then move on.
// 4. Subtract .05 from the amount.
//		a. if the amount is still greater than .05, then do it again.  
//			keep track of the number of times it loops on .05.
//		b. if the amount is still greater than .05, then move on.
// 5. Subtract .01 from the amount and keep track of the number of times it loops on .01.
// 6. Display the results.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var userInput = prompt("Please enter a dollar ammount?");
console.log("userInput", userInput);
////////////////////////////////////////////////////////////////////////////////////
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();