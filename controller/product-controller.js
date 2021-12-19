import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.json(products);
    }catch(error){
        console.log("Error while calling getproducts", error.message);
    }
}

export const getProductById  = async  (request, response) => {
    try {
        
        const product = await Product.findOne({'id': request.params.id});
        console.log(product);
        response.json(product);


    }catch(error){
        console.log('Error: ', error.message);
    }
}