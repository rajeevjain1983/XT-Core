
var inputText="";
document.querySelectorAll(".button").forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        
       // debugger;
       storeExpressonFromMouse(e.target.innerText);
    });
});

function storeExpressonFromMouse(input=""){
    //debugger;
    let inputBox=document.querySelector(".input-text");
    let inputChar=input;
    let inputCode=inputChar.charCodeAt(0);
    console.log(inputCode);
   if(inputCode!==61 && inputCode!==67 ){
    inputBox.value=inputBox.value+inputChar;
   }
    if(isOperator(inputCode)){
        inputText=inputText+inputBox.value;
        inputBox.value="";
    }
}

function storeExpressonFromKeyboard(input=""){
   // debugger;
    let inputBox=document.querySelector(".input-text");
    let inputChar=input;
    let inputCode=inputChar.charCodeAt(0);
    console.log(inputCode);

    if(isOperator(inputCode)){
        if(inputCode!==61){
            //debugger;
            inputBox.value=inputBox.value+inputChar;
        }
        inputText=inputText+inputBox.value;
        inputBox.value="";
    }
}



document.querySelector("#btnEqual").addEventListener("click",()=>{
    calculate();88
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
   //debugger;
    //console.log(evt.key);
    this.selectionStart = this.selectionEnd = this.value.length;
    if (validInput(evt.which))
    {
        if(isOperator(evt.which)){
            evt.preventDefault();
        }
        storeExpressonFromKeyboard(evt.key);
        if(evt.which===61){
        calculate();
        }
    }
    else{
        evt.preventDefault();
    }

});

document.querySelector("body").addEventListener("keypress", function (evt) {
    document.querySelector(".input-text").focus();
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
    //debugger;
    if(inputText.length>0){
        console.log(inputText.length);
        let result=eval(inputText);
        document.querySelector(".input-text").value=result;
        inputText="";
   }
}