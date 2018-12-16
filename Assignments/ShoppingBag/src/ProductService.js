

export class ProductService{
    constructor(url)
    {
        this.url=url;
    }

   async addProduct(product)
    {
            try{
                product.id= Math.floor(Math.random() * 1000);
                const response= await fetch(this.url,{
                    method:'POST',
                    body:JSON.stringify(product),
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                if(response.status!==200 && response.status!==201){
                    throw new Error(response.statusText);
                }

                return await response.json();
        }
        catch(err){
                throw(err);
        }
    }

    async updateProduct(product){
        try{
           // debugger;
                const response=await fetch(`${this.url}/${product.id}`,{
                    method:'PUT',
                    body:JSON.stringify(product),
                    headers:{
                        'content-Type':'application/json'
                    }
                });
                if(response.status!==200 && response.status!==201){
                    throw  new Error(response.statusText)
                }
                return await response.json();
        }
        catch(err){
            throw err;
        }
    }
    async findAll(){
        try{
            //debugger;
            const response =await fetch(this.url);
            if(response.status!==200 && response.status!==201){
                throw new Error(response.statusText)
            }
            return await response.json();
        }
        catch(err){
            console.log(err)
        }
    }

    async findById(id){
        try{
            //debugger;
            const response =await fetch(`${this.url}/${id}`);
            if(response.status!==200 && response.status!==201){
                throw new Error(response.statusText)
            }
            return await response.json();
        }
        catch(err){
            console.log(err)
        }
    }

    async deleteProduct(id){
        try{
                const response=await fetch(`${this.url}/${id}`,{
                    method:'DELETE'
                });
                if(response.status!==200 && response.status!==201){
                    throw  new Error(response.statusText)
                }
                return await response.json();
        }
        catch(err){
            throw err;
        }
    }
}
