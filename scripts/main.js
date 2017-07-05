/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(handArray){

  var handTotal = 0;

  //console.log(handArray);

  for(var index = 0; index < handArray.length; index++) {

    var card = handArray[index];




    if(card == "A") {

      card == 11;

    }
    else if(card == "K" || card == "Q" || card == "J") {

      card = 10;
    }
    else {

      card = parseInt(card);
      handTotal = handTotal + card;
    }
  }
  return handTotal;
}

console.log(handValue(["Q", "1", "K"]))







/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
