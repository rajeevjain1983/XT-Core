import {ATM} from './ATM';
import {HtmlRender} from './htmlRender';


//document.querySelector('#txtGetMoney').disabled = true;

//***************** Validation ************************************************************ */
document.querySelector("#txtAmount").addEventListener('focusout',(e)=>{
    let form=document.querySelector(".form");
    let valid=form.reportValidity();
    document.querySelector('#txtGetMoney').disabled = !valid;
});

document.querySelector("#txtAmount").addEventListener('input',(e)=>{
    let form=document.querySelector(".form");
    let valid=form.reportValidity();
    document.querySelector('#txtGetMoney').disabled = !valid;
});
//*********************************************************************************************** */


//************************************** Button Click *******************************************
document.querySelector("#txtGetMoney").addEventListener("click",(e)=>{
    let htmlRender=new HtmlRender();
    let resultContainer=document.querySelector(".result");
    let form=document.querySelector(".form");
    let valid=form.reportValidity();
    if(valid)
    {
        resultContainer.innerHTML=""; //initially set blank || No child node
        resultContainer.appendChild(htmlRender.loadingImage("images/processing.gif"));
        let amount=document.querySelector("#txtAmount").value;
        const notes=[1,2,5,10, 20, 50, 100, 200, 500,2000];//Available notes
        let atm=new ATM(notes);
        let result=atm.dispense(amount,notes.length-1)
        .then((res)=>{
            resultContainer.innerHTML=""; //initially set blank || No child node
            htmlRender.renderResult(res);
        })
    }
    e.preventDefault();
});








