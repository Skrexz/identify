const express = require('express');
const app = express();
const cors = require("cors");
const { usuarios } = require("./src/usuarios/usuarios.module");


app 

    .use(cors())
    .use(express.json())
    .use("/usuarios", usuarios)


    app.listen(3000)