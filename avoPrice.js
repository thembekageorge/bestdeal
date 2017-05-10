var givenString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

function bestdeal(string){

 var splitString = string.split(',');

 var newArr = [];

for (var i = 0; i < splitString.length; i++) {

  var splitDeal = splitString[i].split('for');

 var numberofAvoes = splitDeal[0];

 var dealPrice = splitDeal[1].replace("R","");

  var priceOfAvo = Number(dealPrice/numberofAvoes).toFixed(2);
  return priceOfAvo;
}
}
console.log(bestdeal(givenString));
