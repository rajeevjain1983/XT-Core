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


function getUser()
{
   return Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/users")
      ])
     
}
getUser()
.then(res=>res.map((item,index)=>{
        item.json()
        .then(response=>console.log(response[0].name));
         }));

 