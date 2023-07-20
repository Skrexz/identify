const express = require('express');
const app = express();
const cors = require("cors");
const { usuarios } = require("./usuarios/usuarios.module");


app 

.use(cors())
.use(express.json())
.use("/usuarios", usuarios)


app.listen(3306);