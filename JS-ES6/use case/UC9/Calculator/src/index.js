
var inputText="";
document.querySelectorAll(".button").forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        storeExpresson(e.target.innerText);
    });
});

function storeExpresson(input=""){
    //console.log(input);
    let inputBox=document.querySelector(".input-text");
    let inputChar=input;
    let inputCode=inputChar.charCodeAt(0);
    console.log(inputCode);
   if(inputCode!==61 && inputCode!==67){
    inputBox.value=inputBox.value+inputChar;
   }
    if(isOperator(inputCode)){
        inputText=inputText+inputBox.value;
        //console.log(inputText);
        inputBox.value="";
    }
}



document.querySelector("#btnEqual").addEventListener("click",()=>{
   f();
});

document.querySelector("#btnClear").addEventListener("click",()=>{
    inputText="";
    document.querySelector(".input-text").value="";
});


// document.querySelector(".input-text").addEventListener("keyup", function (evt) {
//     console.log(evt.key);
//     storeExpresson(evt.key);
// });

document.querySelector(".input-text").addEventListener("keypress", function (evt) {
   console.log(evt.key);
    if (!validInput(evt.which))
    {
        evt.preventDefault();
    }
    else if(evt.which===61){
        evt.preventDefault();
        calculate();
    }
    else{
        storeExpresson(evt.key);
    }
});

function validInput(input){

    if(input >=48 && input <= 57)
    {
        return true;
    }
    
    return isOperator(input);
}

function isOperator(input){
    switch(input){
        case 42 : return true;
        case 43 : return true;
        case 45 : return true;
        //case 46 : return true;
        case 47 : return true;
        case 37 : return true;
        case 61 : return true;
    }
    return false;
}

function calculate(){
    if(inputText.length>0){
        console.log(inputText.length);
        let result=eval(inputText);
        document.querySelector(".input-text").value=result;
        inputText="";
   }
}