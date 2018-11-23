let myname='rajeev jain';
let age=18;
let isActive=true;
console.log(myname,age,isActive);



///const Variables
const pi=null;
//pi=4;
console.log(pi);



////////////////////////////////////////////////////////
//Functions.


function sayHello(){
    console.log("Hello");
}

//sayHello();

//Function syntax and coding Standards;
//Functions Roles:
// 1: Functions as "Unit of Execution"
// 2: Function as paramerter => async
// 3:function inside another function =>closure
// 4:Function return another function  => Curry
// 5:function as used object template =>object constructor

// Role are decided during runtime,semantically decided during source code


//Runtime : sayHello(); / sayHello.call();, sayHello.apply(), sayHello.bind();

//sayHello();
//sayHello.apply();
sayHello.call();

//a , b is arg
function add(a,b){

    a=a || 0;
    b=b || 0;
    console.log(a+b);
}

//defined in ES6 if we pass undefinded as argument
function add1(a=0,b=0){

   
    console.log(a+b);
}


// 10, 30 are parameters
add(10,20);
add("10",10);
add(10,10,30);

add1();


//returning 


function substract(a,b)
{
    return a-b;
}
const result=substract(10,1);
console.log(result);

function login(username, password)
{
    if(username==="Rajeev" && password==="123")
    {
        return true;
    }
    return ;
}

result1=login("Rajeev","123");
console.log(result1);

const IsloggedIn=login("Rajeev","123")? 'OK' :'Not ok';
console.log(IsloggedIn);


// function log()
// {
//     console.log(arguments);
// }

//REST OPERATOR

function log(...args)
{
    console.log(args);
}

log("hello");
log("hello","Rajeev","Rajeev");

function doWeblog(page,...args){
console.log(page,args);
}
doWeblog('productpage','13','test','asdf',23,100);



