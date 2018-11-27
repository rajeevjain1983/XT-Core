const getUser=(resolve,reject)=>{
    let mockUser={
        name:'Rajeev',
        password:'sapient'
    }

   login(mockUser,resolve,reject)
};



function successHandler(obj){
    Dashboard(obj);
}
function failhandler(obj){
    console.log(obj);
}


function login(user,sucess,fail){
    if(user.name==='Rajeev' && user.password==='sapient'){
        sucess(user);
    }
    else
    {
        fail({err:'Something went wrong'});
    }
}


function Dashboard(user){
    console.log(`Hello ${user.name} Welcome to Dashboard`);
}

getUser(successHandler,failhandler);