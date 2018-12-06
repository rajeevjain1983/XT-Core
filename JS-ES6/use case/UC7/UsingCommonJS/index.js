class User{
    constructor(id,name,age,city){
        this.id=id;
        this.name=name;
        this.age=age;
        this.city=city;

    }
}

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

const userComponent=new UserComponent(new UserService('http://localhost:3000/profile'));

console.log('Performed CRUD Operation');