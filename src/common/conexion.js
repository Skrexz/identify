const mysql = require('mysql');
const conexion = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password: '',
    database: 'identificacion'
});



conexion.connect();

module.exports ={
    conexion
}
