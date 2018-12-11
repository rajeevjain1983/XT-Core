console.log('Node has started');
const NEFTTransferService=require('./services/NEFTTransferService');
const Account=require('./models/Account');


let service=new NEFTTransferService();
// let account1=new Account(111,10000);
// let account2=new Account(222,20000);
//console.log('test.....',account1.balance);


service.transfer(500,10000,20000);

