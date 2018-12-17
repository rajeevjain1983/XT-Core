import {Product} from './Product';
import {ProductService} from './ProductService';
import {ProductComponent} from './ProductComponent';
import {HtmlRender} from './htmlRender';
import {Overlay} from './Overlay';

document.querySelector("#loader").style.display = "block"; 
document.querySelector(".content").style.visibility = "hidden"; 

const loadData=()=>{
    productComponent.getProducts()
    .then((products)=>{
        document.querySelector("#loader").style.display = "none"; 
    document.querySelector(".content").style.visibility = "visible"; 
        var htmlRender=new HtmlRender();
        htmlRender.renderProducts(products);
    })
    .catch(err=>console.log(err))
}

const productComponent=new ProductComponent(new ProductService('http://localhost:3000/products'));
loadData();

document.querySelector("#btn-close").addEventListener("click",(e)=>{
    document.getElementById("overlay").style.display = "none";
    //new Overlay().Close();
});

// document.querySelector("#overlay").addEventListener("click",(e)=>{
//    document.getElementById("overlay").style.display = "none";
//     new Overlay().Close();
// });

document.querySelectorAll(".product-colors").forEach((item, index)=>{
    item.addEventListener("click",()=>{
        
        let selectColor=item.attributes["color"].value;
        document.querySelector("#productColor").value=selectColor;
    });

});



document.querySelector("#btnSave").addEventListener("click",(e)=>{

    let qty=document.querySelector("#productQty").value;
    let productId=document.querySelector("#productId").value;
    let color=document.querySelector("#productColor").value;
    let size=document.querySelector("#productSize").value;
    document.querySelector("#loadingImage").style.display = "block"; 
    document.querySelector(".overlay-main").style.visibility = "hidden"; 
    //alert(productId);
    productComponent.getProduct(productId)
    .then((product)=>{
        product.qty=qty;
        product.color=color;
        product.size=size;
        productComponent.updateProduct(product)
        .then((res)=>{
            //console.log(res);
            loadData();
            document.querySelector("#loadingImage").style.display = "none"; 
            document.querySelector(".overlay-main").style.visibility = "visible"; 
            document.getElementById("overlay").style.display = "none";
            new Overlay().Close();
        });
    })
    .catch(err=>console.log(err)) 
 });

 






