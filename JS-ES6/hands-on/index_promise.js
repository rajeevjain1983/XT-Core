'use strict'





//////////////////////////////Promoises///////////////////////////////

console.log('***************')
// // const getUser=(resolve, reject) => {

// //     resolve({
// //     name:'foo'
// // });

// }

const getUser=() => {

    let mockUser ={
        name:'admin'
    }
    
    const promise=new Promise(function(resolve,reject){
        if(mockUser)
        {
            resolve(mockUser);
        }
        else
        {
            reject({err:'Something went wrong'});
        }
    });
    return promise;
};

const promise=getUser();

// promise.then(function(response){
//  console.log(response);
// })
// .catch(function(err){
// console.log(err);
// });

// promise.then(response => console.log(response))
// .catch(error=>console.log(error));

////////////////////////////////////////////////////

console.log('*****************************')

const getCustomers=({id,address:{city,state}})=>{
console.log(id,city,state);
}


const customer={
    id:100,
    address:{
        city:'Delhi',
        state:"HR"
    }
}

getCustomers(customer);
