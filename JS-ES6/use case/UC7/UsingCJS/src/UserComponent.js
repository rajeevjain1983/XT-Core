//const  UserService = require('./UserService')

class UserComponent{
    constructor(userService)
    {
        this.userService=userService;
    }
    addUser(user)
    {
        console.log("adding user.....");
        this.userService.addUser(user)
        .then(res=>console.log(res));
        //.catch(err=>console.log(err));
        
    }
    updateUser(user){
        this.userService.updateUser(user)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
    findAll(){
        this.userService.findAll()
        .then(res=>res.map((item,index)=>{
            console.log(item);
        }))
        .catch(err=>console.log(err))
    }
    deleteUser(id){
        this.userService.deleteUser(id)
        .then(res=>console.log(`Deleted User ${res}`))
        .catch(err=>console.log(err));
    }

    findById(id){
        this.userService.findById(id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
}
module.exports=UserComponent;