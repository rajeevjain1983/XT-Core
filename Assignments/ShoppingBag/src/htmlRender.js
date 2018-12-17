import {Overlay} from './Overlay';
export class HtmlRender{
    constructor(){

    }
    
    renderProducts(result=[]){
        document.querySelector("#totalItem").innerHTML=`${result.length} Items`;
        let productContainer=document.querySelector(".product-container");
        result.forEach((item,index)=>{
            //console.log(item);
            let container=this.createNode("div","","container");
                    let row=this.createNode("div","","row");
                            let imageContainer=this.createNode("aside","","image-container");
                            imageContainer.appendChild(this.createImage(`images/${item.productImage}`));
                        row.appendChild(imageContainer);
                            let wrapper=this.createNode("div","","wrapper");
                                    let aside1=this.createNode("aside","","aside aside-1");
                                            aside1.appendChild(this.createNode("p",item.name,"heading-Text"));
                                            aside1.appendChild(this.createNode("p",item.code));
                                            aside1.appendChild(this.createNode("p",item.color));
                                            aside1.appendChild(this.createButtonPanel(item.id.toString(),"button-panel mobile-hide"));
                                    let aside2=this.createNode("aside","","aside aside-2");
                                        let p=this.createNode("p");
                                                p.appendChild(this.createNode("span","Size:","label"));
                                                p.appendChild(this.createNode("span",item.size,"size"));
                                        aside2.appendChild(p);
                                            p=this.createNode("p");
                                                p.appendChild(this.createNode("span","QTY:","label"));
                                                p.appendChild(this.createNode("span",item.qty,"qty"));
                                        aside2.appendChild(p);
                                        aside2.appendChild(this.createNode("p",`$${item.price}`,"heading-Text price"));
                                wrapper.appendChild(aside1);
                                wrapper.appendChild(aside2);
                        row.appendChild(wrapper);
                container.appendChild(row);
                container.appendChild(this.createButtonPanel(item.id.toString(),"button-panel mobile"));
            productContainer.appendChild(container);
            let lineClass="line";
            if(index === result.length-1){
                lineClass="line thick";
            }
            productContainer.appendChild(this.createNode("div","",lineClass));

        });
    }

    createButtonPanel(productId,className)
    {
        let ul=this.createNode("ul","",className);
                let li=this.createNode("li");
                li.appendChild(this.createLink("#","EDIT","",productId));
                li.addEventListener("click",()=>{
                    new Overlay().Open(productId);
                });
            ul.appendChild(li);
                li=this.createNode("li","|");
            ul.appendChild(li);
                li=this.createNode("li");
                li.appendChild(this.createLink("#","X REMOVE"));
            ul.appendChild(li);
                li=this.createNode("li","|");
            ul.appendChild(li);
                li=this.createNode("li");
                li.appendChild(this.createLink("#","SAVE FOR LATER"));
            ul.appendChild(li);
        return ul;
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
    createImage(src="../images/processing.gif",className=""){
        let node = document.createElement("img");
        node.src=src;
        if(className.length>0)
        {
            node.className=className;
        }
        return node;
    }

    createLink(href="#",text="",className="",args=""){
        
        //console.log(param.length);
        let node = document.createElement("a");
        node.href=href;
        if(text.length>0)
        {
            let textnode = document.createTextNode(text);
            node.appendChild(textnode);
        }
        if(className.length>0)
        {
            node.className=className;
        }
        if(args.length>0)
        {
            node.setAttribute('args', args);
        }
        return node;
    }

    
}