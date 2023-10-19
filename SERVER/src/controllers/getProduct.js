const {Product} = require("../db")

    
const getProduct = async (name) => {
    const product =  await Product.find(name)
    
 return product;
}
module.exports = getProduct;