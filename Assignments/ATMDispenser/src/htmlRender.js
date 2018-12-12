
export class HtmlRender{
    constructor(){

    }
    renderResult(result=[]){
        let totalNotes=0;
        let resultContainer=document.querySelector(".result");
        resultContainer.appendChild(this.createNode("H4","You will get the following input"));
        resultContainer.appendChild(this.createNode("div","","line"));
        
        let position=result.length-1;
        result.forEach((item,index)=>{
            //Geting data from reverse order
            item=result[position-index];
            totalNotes=totalNotes+item.count;
            resultContainer.appendChild(this.createNode("span",`${item.count} notes of Rs ${item.note}`));
            if((index+1)%2===0)
            {
                resultContainer.appendChild(this.createNode("div","","line"));
            }
        });

        resultContainer.appendChild(this.createNode("H4",`Total Notes Dispensed:${totalNotes}`));
        resultContainer.appendChild(this.createNode("div","","line thick"));
    }


    //Generate dynamic HTML node
    createNode(nodeName="span",text="",className=""){
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

    //processing image
    loadingImage(src="../images/processing.gif",className=""){
        let node = document.createElement("img");
        node.src=src;
        if(className.length>0)
        {
            node.className=className;
        }
        return node;
    }
}