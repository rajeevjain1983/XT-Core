var price =100;
var todayPrice=100
var status=price==todayPrice;
console.log(status);

var stockvalue="100";
var todayValue=100;
var stockStatus=stockvalue==todayValue;
console.log(stockStatus);


//Comparsional Operator

var a=40;
var b=30;
var isBig=a>b;

if(isBig)
{
    console.log('A is Big');
}
else
{
    console.log('B is Big')
}

//Logical Operators

// if first operand is truthy the result is first, else the second operand
var greeting="Welcome";
var message=greeting ||  "hello";
console.log(message);

// YOu can try with  and operator


var first="rajeev";
var msg=first || "hello";
console.log(msg);

// Tenary Operators
////////////////////
var age=19;
var eligibility =age >=23 ? "adult" : "minor";
console.log(eligibility);

var counter=1;
var score=counter ? "you won": "you loss";

console.log(score);

//////////////////////////////////////////////////////////////////////
// Type of


var num=1;
var str="rajeev";
var bool1=true;
var und;
var val=NaN;
var val2=100/0;
var fn=function hello(){};
var obj={id:1};
var nullValue=null;
var val3=1.0;
console.log(`The type of num is ${typeof num}`);

console.log(`The type of str is ${typeof str}`);
console.log(`The type of bool1 is ${typeof bool1}`);
console.log(`The type of und is ${typeof und}`);
console.log(`The type of val2 is ${typeof val2}`);
console.log(`The type of fn is ${typeof fn}`);
console.log(`The type of obj is ${typeof obj}`);
console.log(`The type of nullValue is ${typeof nullValue}`);


////////////////////////////////////////////////////////////////////////

var actionType =3;
switch(actionType){
    case 1 : console.log("1111111");
    case 2 : console.log("22222");
    case 3 : console.log("33333"); 
    case 4 : console.log("444");
    case 5 : console.log("555");
    case 6 : console.log("6666666");
}


