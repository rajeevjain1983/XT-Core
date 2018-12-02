///////////////////////// AJAX PROGARMMING

console.log('AJAX PROGRAMMING');
console.log('USING RAW XMLHTTP REQUEST');


// function reqListener(){
//     console.log(this.responseText);
// }

// const oReq=new XMLHttpRequest();
// oReq.addEventListener("load",reqListener);
// oReq.open("GET","https://jsonplaceholder.typicode.com/users");
// oReq.send();




// function getUser(){
//     const url="https://jsonplaceholder.typicode.com/users";
//     return fetch(url);
// }

// getUser()
// .then(res=>res.json())
// .then(body=>console.log(JSONbody));


// function getUser(apiurl){
//     const url=apiurl
//     return fetch(url);
// }

// getUser("https://api.github.com/users/rajeevjain1983")
// .then(res=>res.json())
// .then(body=>console.log(body));




// function getUser()
// {
//     Promise.all([
//         fetch("https://api.github.com/users/rajeevjain1983"),
//         fetch("https://api.github.com/users/akanksha-211"),
//         fetch("https://api.github.com/users/adishmodi")
//       ])
//      .then(res=>res.map((item,index)=>{
//     item.json()
//     .then(response=>console.log(response));
//      }));
// }

// getUser();

    
// function getUser()
// {
//    return Promise.all([
//         fetch("https://api.github.com/users/rajeevjain1983"),
//         fetch("https://api.github.com/users/akanksha-211"),
//         fetch("https://api.github.com/users/adishmodi")
//       ])
     
// }
// getUser()
// .then(res=>res.map((item,index)=>{
//         item.json()
//         .then(response=>console.log(response));
//          }));


// function getUser()
// {
//    return Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users"),
//         fetch("https://jsonplaceholder.typicode.com/users"),
//         fetch("https://jsonplaceholder.typicode.com/users")
//       ])
     
// }
// getUser()
// .then(res=>res.map((item,index)=>{
//         item.json()
//         .then(response=>console.log(response[0].name));
//          }));

 

//Asyn functions

// async function getUser(){
//   return Promise.resolve({
//     id:2,
//     name: 'Rajeev'
//   })
// }
// getUser().then(res=>console.log(res));

// /////////////

// async function getValue(){
//   return 10;
// }

// getValue().then(res=>console.log(res));

// ///////////

// async function f(){
//   let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("done!"),1000)
//   });

//   let result=await promise;// wait till the promise
//   console.log(result);
// }

// f();

////////////////////////////////////


// async function getUsers(url){
//  // debugger
//   let response=await fetch(url);
//   let body=await response.json();
//   return body;
// }
// getUsers('https://jsonplaceholder.typicode.com/users')
// .then(res=>console.log(res));

// class Waiter{
//   async wait(){
//     return await Promise.resolve(13333);
//   }
// }

// new Waiter()
// .wait()
// .then(res=>console.log(res));


//Exception and Error Handling in java Script


async function errorHandler(){
  try{
    let reuslt1=await Promise.resolve('hey -1');
    console.log(reuslt1);
    let response=await fetch('https://no-scuh-url');
  }
  catch(err){
    console.log('Error:::'+err);
  }
  finally{
    console.log('code completed');
  }
}

errorHandler();