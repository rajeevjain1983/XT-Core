import {Product} from './Product';
import {ProductService} from './ProductService';
import {ProductComponent} from './ProductComponent';
import {HtmlRender} from './htmlRender';
import {Overlay} from './Overlay';

document.querySelector("#loader").style.display = "block"; 
document.querySelector(".content").style.visibility = "hidden"; 
const productComponent=new ProductComponent(new ProductService('http://localhost:3000/products'));
productComponent.getProducts()
.then((products)=>{
    document.querySelector("#loader").style.display = "none"; 
   document.querySelector(".content").style.visibility = "visible"; 
    var htmlRender=new HtmlRender();
    htmlRender.renderProducts(products);
})
.catch(err=>console.log(err))

document.querySelector("#btn-close").addEventListener("click",(e)=>{
    new Overlay().Close();
});

document.querySelector("#overlay").addEventListener("click",(e)=>{
   document.getElementById("overlay").style.display = "none";
    new Overlay().Close();
});




