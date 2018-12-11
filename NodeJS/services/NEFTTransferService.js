const SQLAccountRepository=require('../repository/SQLAccountRepository');

class NEFTTransferService{
    constructor(){
        console.log("Neft service instance is created");
    }

    transfer(amount,fromAccNum, toAccNum){
       console.log(amount,fromAccNum,toAccNum);
       console.log("Tranfer Begin....");
       const sQLAccountRepository=new SQLAccountRepository();
       //load account(s)
       const fromAccount=sQLAccountRepository.loadAccount(fromAccNum);
       const toAccount=sQLAccountRepository.loadAccount(toAccNum);

       fromAccount.balance-=amount;
       toAccount.balance+=amount;

      sQLAccountRepository.updateAccount(fromAccount);
      sQLAccountRepository.updateAccount(toAccount);
       console.log("trans success....");
    }
   
}
module.exports=NEFTTransferService;