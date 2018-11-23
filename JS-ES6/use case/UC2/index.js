console.log("Console Calculator");

function Calculator(arg1=0, arg2=0,operator)
{
    const type='number';
    if(typeof(arg1)!=type || typeof(arg2)!=type)
    {
        return "Please enter number only";
    }
    switch(operator)
    {
        case "+" : return Add(arg1,arg2);
        case '-' : return Sub(arg1,arg2);
        case '*' : return Multiply(arg1,arg2);
        case '/' : return Devide(arg1,arg2);
        case '%' : return Remender(arg1,arg2);
    }
}

function Add(...args)
{
    return args[0]+args[1];
}
function Sub(...args)
{
    return args[0]-args[1];
}
function Multiply(...args)
{
    return args[0]*args[1];
}
function Devide(...args)
{
    return args[0]/args[1];
}
function Remender(...args)
{
    return args[0]%args[1];
}


var result=Calculator(1556,24234,"*");
console.log(`Result is ${result}`);



