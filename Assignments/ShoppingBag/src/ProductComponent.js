
export class ProductComponent{
    constructor(productService)
    {
        this.productService=productService;
    }
    addProduct(product)
    {
        console.log("adding product.....");
        return this.productService.addProduct(product);
    }
    updateProduct(product){
        this.productService.updateproduct(product)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
    getProducts(){
        return this.productService.findAll()
        // .then(res=>res.map((item,index)=>{
        //     console.log(item);
        // }))
        // .catch(err=>console.log(err))
    }
    deleteProduct(id){
        this.productService.deleteproduct(id)
        .then(res=>console.log(`Deleted product ${res}`))
        .catch(err=>console.log(err));
    }

    findById(id){
        this.productService.findById(id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
}