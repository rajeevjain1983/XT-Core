

const demo=[1,2,5,10, 20, 50, 100, 200, 500,2000];
document.querySelector('#txtGetMoney').disabled = true;
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





document.querySelector("#txtGetMoney").addEventListener("click",(e)=>{
    let form=document.querySelector(".form");
    let valid=form.reportValidity();
    if(valid)
    {
        let amount=document.querySelector("#txtAmount").value;
        let atm=new ATM(demo);
        atm.dispense(amount,demo.length-1);
        renderResult(atm.dis);
        e.preventDefault();
    }
});


const renderResult=(result=[])=>{
    let totalNotes=0;
    let resultContainer=document.querySelector(".result");
    resultContainer.innerHTML=""; //initially set black || No child node
    
    resultContainer.appendChild(createNode("H4","You will get the following input"));
    resultContainer.appendChild(createNode("div","","line"));
    
    result.forEach((item,index)=>{
        totalNotes=totalNotes+item.count;
        resultContainer.appendChild(createNode("span",`${item.count} notes of Rs ${item.note}`));
        if((index+1)%2===0)
        {
            resultContainer.appendChild(createNode("div","","line"));
        }
    });

    resultContainer.appendChild(createNode("H4",`Total Notes Dispensed:${totalNotes}`));
    resultContainer.appendChild(createNode("div","","line thick"));
}


//Generate dynamic HTML node
const createNode=(nodeName="span",text="",className="")=>{
    let node = document.createElement(nodeName);
    if(text.length>0)
    {
        let textnode = document.createTextNode(text);
        node.appendChild(textnode);
    }
    if(className.length>0)
    {
        node.className=className;
    }
    return node;
}





