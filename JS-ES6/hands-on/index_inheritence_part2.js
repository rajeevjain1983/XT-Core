console.log('**********************Inheritence using Proptype *****');

console.log('*************HOw to link two objects*****************');
console.log('************* Object.create *****************');

console.log('********* First Appraoch ******************************')
function Person(name='default')
{
    this.name=name;
    console.log('Person is called');
}

function Employee(name)
{
    Person.call(this,name);
    console.log('Employee is called');
}

Employee.prototype=Object.create(Person.prototype);

const emp=new Employee();
console.log(emp.name);

const emp1=new Employee('Rajeev');
console.log(emp1);

////////////////////////////////////////////////////////////////////
console.log('********* Second Appraoch (ES6) ******************************')

class Account{
    constructor(balance=1){
        console.log('Account is called');
        this.balance=balance
    }
}
class SavingAccount extends Account{
    constructor(name,balance)
    {
        super(balance);
        this.name=name;
        console.log('Saving Account is called');
    }
}

const sa=new SavingAccount('Rajeev',2000);
console.log(sa);


//////////////// No Parent

console.log('No parent');
const hero=Object.create(null);
hero.name="RRRRR";
console.log(hero);

/////////////

const favFood ={
    name:'rice',
    toString() {
        return this.favFood
    }
}

console.log(favFood.toString());

//////////////////////////////////////////////////////////////
console.log('Static Api Utility');

function Utility() {  
}
Utility.add=function(a,b){
    return a+b;
}

console.log(Utility.add(10,10));

/////////// OR /////////////////

class MathUtility{
    static add(a,b)
    {
        return a+b;
    }
}

console.log(MathUtility.add(20,20));