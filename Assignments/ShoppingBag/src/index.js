import {Product} from './Product';
import {ProductService} from './ProductService';
import {ProductComponent} from './ProductComponent';
import {HtmlRender} from './htmlRender';

const productComponent=new ProductComponent(new ProductService('http://localhost:3000/products'));
productComponent.getProducts()
.then((products)=>{
    console.log(products);
    var htmlRender=new HtmlRender();
    htmlRender.renderProducts(products);
})
.catch(err=>console.log(err))


document.querySelector(".header").addEventListener("click",(e)=>{
    
    // productComponent.addProduct(new Product(0,'solid green cotton tshirt','3','S','Green','11.50','Style#MS13KT906','','top-1.jpeg'));
    // productComponent.addProduct(new Product(0,'Pink Rainbow Print Girls Tee','2','M','Red','17.50','Style#MS13KT907','','top-2.jpeg'));
    // productComponent.addProduct(new Product(0,'Solid Blue cotton tshirt','1','L','Blue','9.50','Style#MS13KT908','','top-3.jpeg'));
});

document.querySelector("#btn-close").addEventListener("click",(e)=>{
    document.getElementById("overlay").style.display = "none";
});


