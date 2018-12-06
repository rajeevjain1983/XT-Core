import Profile from './user';
import UserService from './UserService';
import UserComponent from './UserComponent';

document.querySelector('#form1').addEventListener('click',function(e){
 });

const getFieldsValue=function(){

    let name=document.querySelector("#txtName").value;
    let email=document.querySelector("#txtEmail").value;
    let phone=document.querySelector("#txtPhone").value;
    let description=document.querySelector("#txtMsg").value;
    let gender=document.querySelector('input[name=gender]:checked').value;
    let employement=document.querySelector('input[name=Employement]:checked').value;
    let city=document.querySelector("#citySelect").value;
    let state=document.querySelector("#stateSelect").value;
    return new Profile(0,name,email,phone,gender,city,state,description);

}

 document.querySelector('#btnSubmit').addEventListener('click',function(e){
    let form=document.querySelector("#form1");
    let valid=form.reportValidity();
    console.log(valid);
    if(valid)
    {
        let user=getFieldsValue();
        const userComponent=new UserComponent(new UserService('http://localhost:3000/profiles'));
       userComponent.addUser(user)
       .then((res)=>{
        console.log(res);
        document.querySelector(".error-container").style.visibility = 'visible';
        
       })
       .catch(err=>console.log(err));
    }

    
 });
 