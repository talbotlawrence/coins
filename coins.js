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

var button = document.getElementById("submit");
button.addEventListener("click", coinCounter);

function coinCounter () {

  var userInput = document.getElementById("input").value;
  userInput = parseFloat(userInput);
  console.log("User input is: ", userInput);
  
  var quarter = .25;                              //console.log("quarter", quarter);
  var dime = .1;
  var nickel = .05;
  var penny = .01;

  var numberOfQuarters;
  var numberOfDimes;
  var numberOfNickels;
  var numberOfPennies;

  //count quarters
  numberOfQuarters = userInput / quarter;         //console.log("numberOfQuarters", numberOfQuarters);
  numberOfQuarters = Math.floor(numberOfQuarters);  //console.log("numberOfQuarters", numberOfQuarters);
  var remainder = userInput - (quarter * numberOfQuarters); //console.log("remainder", remainder);
  remainder = remainder.toFixed(2);                         //console.log("remainder", remainder);

  //count dimes
  numberOfDimes = remainder / dime;
  numberOfDimes = Math.floor(numberOfDimes);
  remainder = remainder - (dime * numberOfDimes);

  //count nickels
  numberOfNickels = remainder / nickel;
  numberOfNickels = Math.floor(numberOfNickels);
  remainder = remainder - (nickel * numberOfNickels);

  //count pennies
  numberOfPennies = remainder / penny;
  numberOfPennies = Math.floor(numberOfPennies);
  remainder = remainder - (penny * numberOfPennies);

  var coinPurse = {
    quarters: numberOfQuarters,
    dimes: numberOfDimes,
    nickels: numberOfNickels,
    pennies: numberOfPennies
  };

  console.log(coinPurse);

  return coinPurse;
}

// var coins = coinCounter();
// console.log(coins);