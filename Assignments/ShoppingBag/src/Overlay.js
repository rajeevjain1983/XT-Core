import {Product} from './Product';
import {ProductService} from './ProductService';
import {ProductComponent} from './ProductComponent';
export class Overlay{
    constructor(){

    }
    
   Open(productId){
    const productComponent=new ProductComponent(new ProductService('http://localhost:3000/products'));
    
    document.querySelector("#loadingImage").style.display = "block"; 
    document.querySelector(".overlay-main").style.visibility = "hidden"; 
    productComponent.getProduct(productId)
    .then((product)=>{
        this.BindOverlay(product);
        document.querySelector("#loadingImage").style.display = "none"; 
        document.querySelector(".overlay-main").style.visibility = "visible"; 
    })
    .catch(err=>console.log(err))

        document.getElementById("overlay").style.display = "block";
   }
   Close(){
    document.querySelector("#btn-close").addEventListener("click",(e)=>{
        document.getElementById("overlay").style.display = "none";
    });
   }

   BindOverlay(item){
        document.querySelector("#productImage").src=`images/${item.productImage}`;
        document.querySelector("#productName").innerHTML=item.name;
        document.querySelector("#productCode").innerHTML=item.code;
        document.querySelector("#productQty").value=item.qty;
        document.querySelector("#productSize").value=item.size;
        document.querySelector("#productId").value=item.id;
   }
}