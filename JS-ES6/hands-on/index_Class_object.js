function counter(abc)
{
    let counter=abc;

    return function incriemnt()
    {
        return counter++;
    }
    // return function decriment()
    // {
    //     return counter--;
    // }
}

// console.log(counter);
var abc=counter(200);
// console.log(abc);
// console.log(abc());
// console.log(abc());
// console.log(abc());


//////////////////////////////////////////********************* */

function Employee(id=1,name='default',salary=1){

    this.id=id;
    this.name=name;
    this.salary=salary;
    this.calculateSalary=function(){
        return 1000*12;
    };
}


let emp=new Employee();

// how to get the access the properties

console.log(emp);
console.log(emp.id, emp.name,emp.calculateSalary());

//Data Initalization
//1:Hardcoded
//2:



emp.name='Rahul';
console.log(emp);

//Constructor Parameters
let emp1=new Employee(12,'Gaurav',2000);
console.log(emp1);

//Literal pattern

let customer= {
id:1,
name:'Sachin',
caluSalary:function (){
return 1000000;
    }
}

console.log(customer.caluSalary());


//Creating object using Class keyword

//E6 Class : to create a object

class Account {
    constructor(id=1, name='default'){
        this.acccountNO=id;
        this.name=name;
    }
    withdraw(){
        return 'withdraw';
    }
    diposit(){
        return 'deposit';
    }
}

let account=new Account(2,"Rahul");
console.log(account);

////////////////////////////////////////////////////////////////////
