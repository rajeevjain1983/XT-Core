
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