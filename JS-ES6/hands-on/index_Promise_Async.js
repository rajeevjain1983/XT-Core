console.log('Synchronous  && Asychronouse Programming');

//async code
function getUser(cb){
    setTimeout(function(){
        console.log('******************');
    },5000);
}

getUser(function(res){
    console.log(res)
})

// Rewrite the code with promise

const getUser2=cb=>{

    const mockUser={
        name:'Rajeev'
    }
    return new Promise((resolve,reject)=>(
        mockUser ? setTimeout(_=>resolve(mockUser),1000)
        : setTimeout(_=>reject({err:'wrong'}),1000)
    ))
};

getUser2()
.then(respnose=>console.log(respnose))
.catch(err=>console.log(err))


//Promise Chaining with setTimeout
new Promise((resolve, reject)=>{
    setTimeout(_=>resolve(1),1000);
})
.then((result)=>{
    console.log(result);
    return result*2;
})
.then((result)=>{
    console.log(result);
    return result *2;
})
.then((result)=>{
    console.log(result);
})

////////////////////////////// The Execution
new Promise((resove,reject)=>{
    throw new Error("whoops!");
})
.catch((error)=>{
    console.log(error);
});

///////////////


function getStatus(key) {
    return key==='222' ? Promise.resolve('done') : Promise.reject('oops');
 }

 getStatus('222')
 .then((result)=>console.log(result))
 .catch((error)=>console.log(error));

 getStatus('333')
 .then((result)=>console.log(result))
 .catch((error)=>console.log(error));

 ////////////////////////////////////////////

 Promise.all([
     new Promise((resolve,reject)=>{
         setTimeout(()=>resolve(10),3000)
     }),
     new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(20),2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(30),2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject({err:'someting wrong'}),2000)
    })
 ])
 .then(res=>console.log('result',res))
 .catch(err=>console.log(err));
