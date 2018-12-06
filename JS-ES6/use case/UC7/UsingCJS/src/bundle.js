(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){

const  User = require('./user')
class UserService{
    constructor(url)
    {
        this.url=url;
    }

   async addUser(user)
    {
            try{
                user.id= Math.floor(Math.random() * 1000);
                const response= await fetch(this.url,{
                    method:'POST',
                    body:JSON.stringify(user),
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                if(response.status!==200 && response.status!==201){
                    throw new Error(response.statusText);
                }

                return await response.json();
        }
        catch(err){
                throw(err);
        }
    }

    async updateUser(user){
        try{
           // debugger;
                const response=await fetch(`${this.url}/${user.id}`,{
                    method:'PUT',
                    body:JSON.stringify(user),
                    headers:{
                        'content-Type':'application/json'
                    }
                });
                if(response.status!==200 && response.status!==201){
                    throw  new Error(response.statusText)
                }
                return await response.json();
        }
        catch(err){
            throw err;
        }
    }
    async findAll(){
        try{
            //debugger;
            const response =await fetch(this.url);
            if(response.status!==200 && response.status!==201){
                throw new Error(response.statusText)
            }
            return await response.json();
        }
        catch(err){
            console.log(err)
        }
    }

    async findById(id){
        try{
            //debugger;
            const response =await fetch(`${this.url}/${id}`);
            if(response.status!==200 && response.status!==201){
                throw new Error(response.statusText)
            }
            return await response.json();
        }
        catch(err){
            console.log(err)
        }
    }

    async deleteUser(id){
        try{
                const response=await fetch(`${this.url}/${id}`,{
                    method:'DELETE'
                });
                if(response.status!==200 && response.status!==201){
                    throw  new Error(response.statusText)
                }
                return await response.json();
        }
        catch(err){
            throw err;
        }
    }
}

module.exports=UserService;
},{"./user":4}],3:[function(require,module,exports){

const  User = require('./user');
const UserService = require('./UserService');
const UserComponent = require('./UserComponent');

 userComponent=new UserComponent(new UserService('http://localhost:3000/profile'));
 return userComponent;
// console.log(userComponent);
// userComponent.findAll();

},{"./UserComponent":1,"./UserService":2,"./user":4}],4:[function(require,module,exports){
class User{
    constructor(id,name,age,city){
        this.id=id;
        this.name=name;
        this.age=age;
        this.city=city;

    }
}

module.exports=User;
},{}]},{},[3]);
