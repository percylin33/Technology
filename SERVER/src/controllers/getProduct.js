const {Product} = require("../db")

    
const getProduct = async (name) => {
    const product =  await Product.findOne({
        where: {
            name:name
          }
    })
    
 return product;
}
module.exports = getProduct;