const Account=require('../models/Account');

class SQLAccountRepository{
    constructor(){
        console.log("SQL Account Repositry instance is created");
    }

    loadAccount(num){
        console.log("loadning Account"+num);
        return new Account(111,num);
    }
    updateAccount(account){
        console.log("updating account "+ account.num);
        console.log("Now balane is "+ account.balance);
    }
}
module.exports=SQLAccountRepository;