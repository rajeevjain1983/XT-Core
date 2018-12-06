
// const  User = require('./user');
// const UserService = require('./UserService');
// const UserComponent = require('./UserComponent');

import User from './user';
import UserService from './UserService';
import UserComponent from './UserComponent';

 const userComponent=new UserComponent(new UserService('http://localhost:3000/profile'));
 console.log(userComponent);
 userComponent.findAll();
