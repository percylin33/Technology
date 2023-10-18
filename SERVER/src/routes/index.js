const {Router} = require("express")
const preducts = require("./products")
const users = require("./users")

const router = Router()

router.use("/product", preducts);
router.use("/users", users);

module.exports =router