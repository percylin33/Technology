const express = require('express');
const cookieParser = require("cookie-parser");
const morgan = require('morgan')
const routes = require("./routes/index")

require("./db")

const server =express();

server.name = 'SERBER'

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.get("/", (req, res) => {
  
    res.json({ info: "Pagina cargada con exito" });
  });
  server.use("/", routes);
  
  // Error catching endware.
  server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

  
module.exports = server