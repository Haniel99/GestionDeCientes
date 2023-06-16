const express = require("express");
const cors = require("cors");

const {router} = require("./router/index");
const { json } = require("body-parser");
const PORT = process.env.PORT | 4300;
const app = express();
app.use(cors());
app.use(router);
app.use(json());

app.listen(PORT,()=>{
    console.log(`The server is running on the port: ${PORT}`);
});