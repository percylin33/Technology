const {Users} = require("../db")

const postUser = async (correo, password, type) => {
   await Users.create({correo, password, type})
    console.log("esta");
 
}
module.exports = postUser;