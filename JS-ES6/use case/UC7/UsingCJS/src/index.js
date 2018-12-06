
const  User = require('./user');
const UserService = require('./UserService');
const UserComponent = require('./UserComponent');

 userComponent=new UserComponent(new UserService('http://localhost:3000/profile'));
 return userComponent;
// console.log(userComponent);
// userComponent.findAll();
