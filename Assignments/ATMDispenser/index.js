

const demo=[1,2,5,10, 20, 50, 100, 200, 500,2000];
//document.querySelector('#txtGetMoney').disabled = true;
console.log(demo);

class DispenseNotes{
    constructor(note,count){
        this.note=note;
        this.count=count;
    }
}

class ATM{
    constructor(demo){
        this.demo=demo;
        this.dis=[];
    }

    dispense(amount,index){
        if(index<0) return;
        var bal=amount%this.demo[index];
        var count=(amount-bal)/this.demo[index];
        this.dis.push(new DispenseNotes(this.demo[index],count));
        index--;
        this.dispense(bal,index);
    }
}


// document.querySelector("#txtAmount").addEventListener('focusout',(e)=>{
//     let form=document.querySelector(".form");
//     let valid=form.reportValidity();
//     document.querySelector('#txtGetMoney').disabled = !valid;
// });

// document.querySelector("#txtAmount").addEventListener('changed',(e)=>{
//     let form=document.querySelector(".form");
//     let valid=form.reportValidity();
//     document.querySelector('#txtGetMoney').disabled = !valid;
// });





document.querySelector("#txtGetMoney").addEventListener("click",(e)=>{
    let form=document.querySelector(".form");
    let valid=form.reportValidity();
    if(valid)
    {
        let amount=document.querySelector("#txtAmount").value;
        let atm=new ATM(demo);
        atm.dispense(amount,demo.length-1);
        renderResult(atm.dis);
        //console.log(atm.dis);
        e.preventDefault();
     
    }
});


const renderResult=(result=[])=>{
    let resultContainer=document.querySelector(".result");
    resultContainer.innerHTML="";
    let node = document.createElement("H4");
    let textnode = document.createTextNode("You will get the following input");
    node.appendChild(textnode);
    resultContainer.appendChild(node);
    node=document.createElement("div");
    node.className="line";
    resultContainer.appendChild(node);
    let totalNotes=0;
    result.forEach((item,index)=>{
        totalNotes=totalNotes+item.count;
        node=document.createElement("span");
        textnode = document.createTextNode(`${item.count} notes of Rs ${item.note}`);
        node.appendChild(textnode);
        resultContainer.appendChild(node);
        if((index+1)%2===0)
        {
            node=document.createElement("div");
            node.className="line";
            resultContainer.appendChild(node);
        }
    });
    node=document.createElement("div");
    node.className="line thick";
    resultContainer.appendChild(node);

    node=document.createElement("H4");
    textnode = document.createTextNode(`Total Notes Dispensed:${totalNotes}`);
    node.appendChild(textnode);
    resultContainer.appendChild(node);
}





