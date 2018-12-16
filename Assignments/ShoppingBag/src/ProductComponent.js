
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
        let result= this.productService.findAll();
        return new Promise((resolve, reject)=>{
            setTimeout(_=>resolve(result),1000);
            })
    }
    deleteProduct(id){
        this.productService.deleteproduct(id)
        .then(res=>console.log(`Deleted product ${res}`))
        .catch(err=>console.log(err));
    }

    getProduct(id){
       let result= this.productService.findById(id);
       return new Promise((resolve, reject)=>{
        setTimeout(_=>resolve(result),1000);
        })
    }
}