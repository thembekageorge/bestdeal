var givenString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

function bestdeal(string){

 var splitString = string.split(',');

 var newArr = [];

for (var i = 0; i < splitString.length; i++) {

  var splitDeal = splitString[i].split('for');
 console.log("after splitting at for"+splitDeal);
 var numberofAvoes = splitDeal[0];
  console.log ("numbers of the avoes"+numberofAvoes);
 var dealPrice = splitDeal[1].replace("R","");
console.log("prices without R"+dealPrice);
  var priceOfAvo = Number(dealPrice/numberofAvoes).toFixed(2);
  return priceOfAvo;
}
}
console.log(bestdeal(givenString));
