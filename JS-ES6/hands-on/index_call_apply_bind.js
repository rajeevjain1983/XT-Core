//object augumenation : instance level
//object from function, literal, class can be augumented.
//Empty object

 //'use strict'


function Employee(){};
const emp=new Employee();
//Augumentation: Adde
emp.id=1;
emp.Name='Rajeev';
emp.Salary=1000;
//console.log(emp);


const emp1=new Employee();
//console.log(emp1);

//Augumentation : Update

//Augumentation: Delete

delete emp.Salary;
//console.log(emp);

for(var key in emp)
{
   // console.log(key);
}

const acc={};

acc.salary=1000;

//console.log(acc);

// 



const Manager=()=>{

}

const Manager1=function(){

}



// console.log("?????")
// console.log(Manager1.prototype)
// console.log(Manager.prototype)


//////////////////////////////////

var a=10;

function printa(){
    //console.log(a);


}
function run()
{
    a=100;
    printa();
}


run();


/////////////////////

//Actor 1 : Callee

function greet(){
    //console.log(this);
}

//Actor 2 : Caller : Default Calleer is window
window.greet();//haere method is bound with window object



///////////////////////

const map={
    x:1000,
    y:2000
}
this.x=3000;
this.y=4000;

function getCordinate()
{
    //console.log(`x is ${this.x} and y is ${this.y}`);
}
getCordinate.call(this);

////////////////////////

function GetStocks(...stocks)
{
   // console.log(`${stocks}`);
}

const stocks=['test','test'];
const obj={
    name:'sapient'
};
GetStocks.apply(obj,stocks);

//////////////////////////////////////////////////////

function Incriment(){
    return this.count++;
}

const counterApp={
    count:0
}
const inc=Incriment.bind(counterApp)
//console.log(inc());
//console.log(inc());


//////////





function sessionStart(){
    function Trainer(name){
        this.name=name;
        this.doTeach=function(subject){
            console.log(this.name + " teaching " + subject);
            let that=this;
            let notes=".js-notes";
            let doLearn=function(){
                console.log(this.name + " learning "+subject +" with "+notes+ " from "+that.name)
            }
            console.log('teaching ends');
            return doLearn
        }
    }

    function Student(name){
        this.name=name;
    }
    const tnr=new Trainer('Rajeev')
    const student1=new Student('Student1');
    const student2=new Student('Student2');
    const doLearn=tnr.doTeach('.js');
    doLearn.call(student1);
    const e2LearnFunc=doLearn.bind(student2);
    e2LearnFunc();
    //e2LearnFunc();
}
sessionStart();
