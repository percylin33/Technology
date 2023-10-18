const server = require("./src/app");
const { conn } =require("./src/db");
const { PORT } = process.env;

conn.sync({alter: true}).then(()=>{
    server.listen(PORT,()=>{
        console.log('% listening at ', PORT);
    })
})