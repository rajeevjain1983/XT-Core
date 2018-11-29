console.log('**************************Is a Relationship');
console.log('**************************Inheritence*****************');

function Account(){
    this.id=1;
    this.name='Rajeev';
    this.calculateInterest=function(){
        return 20;
    }
}

let account=new Account();
account.id=100;
console.log(account);

let account2=new Account();
account2.id=200;
console.log(account2);

console.log('How to add common data in proptype');
Account.prototype.balance=1000;

let account3=new Account();
account3.id=300;
account3.balance=3000;
console.log(account3);

////////////////////////////////////////////////////////////////////////
console.log('**************************Property Lookup*****************');
console.log('Lookup Chain');
console.log('Prop-->pareent1---->parent2----parent3--null');

console.log('Added in common method');

Account.prototype.calculateInterest=function (p=1000,r=10.5,t=12){
    return p*r*t;
}

let account4=new Account();
account4.id=400;
console.log(account4.calculateInterest(1000,10,20));

console.log(account4.__proto__.hasOwnProperty('balance'));

//console.log(account4);
