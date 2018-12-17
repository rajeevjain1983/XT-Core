
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
        console.log(product);
        let result=this.productService.updateProduct(product);
        return new Promise((resolve, reject)=>{
            setTimeout(_=>resolve(result),1000);
            })
    }
    getProducts(){
        let result= this.productService.findAll();
        return new Promise((resolve, reject)=>{
            setTimeout(_=>resolve(result),1);
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