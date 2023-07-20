const mysql = require('mysql');
const conecction = mysql.createConnection ({

    host : 'localhost',
    user : 'root',
    password : '',
    databse : 'usuarios'
});


conecction.connect(function (err){
    if(err){
        console.error('Error de la conexion: ', + err.stack);
        return;
    }
    console.log('Conectando con el identificador :' + conexion.threadId);
});

module.exports ={
    conecction
}