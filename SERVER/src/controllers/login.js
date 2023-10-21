const {Users} = require("../db")

    
const login = async (correo, password, type) => {
    const user =  await Users.findOne({
        where: {
            correo:correo,
            password:password
          }
    })
    
 return user;
}
module.exports = login;