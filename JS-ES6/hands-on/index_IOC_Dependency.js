
console.log('**************************Design Pattern*****');
console.log('**************************IOC*****************');
console.log('**************************Dependecy Injection *****');

//ES 5 Syntax

function Address(doorno=1, street='street',city='city',zipcode='zipcode',state='state'){
    this.doorno=doorno;
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
    this.state=state;
}
function Employee(id=1, name='',address=new Address()){
    this.id=id,
    this.name=name;
    this.address=address;
}

let emp=new Employee();
console.log(emp);

let address=new Address('201','Paras Tierea','Noida','201305','UP');
let employee=new Employee(89,'Rajeev',address);

console.log(employee);

///////*************************************************************************//////////

console.log('*******************************************************************');

class Order{
    constructor(orderid='00a',value=0){
        this.orderid=orderid;
        this.value=value;
    }
}
class Customer{
    constructor(id=1,name='',order=new Order()){
        this.id=id,
        this.name=name;
        this.order=order;
    }
}

class CustomerComponent{
    constructor(){
            console.log('Customer UI is Called');
    }
    init(){
        
    }
    render(){
        let order =new Order('000',50000);
        let customer=new Customer(100,'Rajeev',order);
        console.log(customer);
    }
}

new CustomerComponent().render();

