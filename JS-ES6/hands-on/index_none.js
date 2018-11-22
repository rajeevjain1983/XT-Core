//if variables has undefined
var x;
var y;
var result=x*y;
console.log(result);



var price=10;
var qty;
var totalPrice=price*qty;
console.log(totalPrice);

//if type conversion error
//var stockValue="$100.89";
//var stockValue=parseFloat("100.89#");
var stockValue="100.89$";
var totalStock=13;
var amount=stockValue*totalStock;
console.log(amount);


//Infinity
var score=98;
var avg=score/00000;
console.log(avg);