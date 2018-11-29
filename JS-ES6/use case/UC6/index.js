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
        .then(response=>console.log(response));
         }));
