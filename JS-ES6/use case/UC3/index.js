const getUser=()=>{
    let mockUser={
        name:'Rajeev',
        password:'sapient'
    }

    return new Promise((resolve, reject)=>{
        if(mockUser)
        {
            resolve(mockUser);
        }
        else
        {
            reject({err:'User has not found'});
        }
    });

  return mockUser;
};


function login(user){
    
    return new Promise((resolve, reject)=>{
            if(user.name==='Rajeev' && user.password==='sapient'){
            resolve(user);
            }
            else
            {
                reject({err:'User and password does not match'});
            }
    });
    
}


function Dashboard(user){
    console.log(`Hello ${user.name} Welcome to Dashboard`);
}

getUser()
.then(res => login(res)
.then(res=>Dashboard(res))
.catch(res=>console.log(res)))
.catch(res=res=>console.log(res));

