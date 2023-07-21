const { response } = require('express');
const { conexion } = require('../common/conexion');



const find = (req, res = response ) => {
    //hacer query para buscar todos
    conexion.query("select * from usuarios",
    [],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });
};

const findOne = (req, res = response) => {
    conexion.query("select * from usuarios where id_usuario = ?",
    [req.params.id],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });
};

const create = (req, res = response) => {
    conexion.query(`insert into usuarios (nombre,
        apellido,
        edad,
        cedula,
        correo,
        contraseña) values (?, ?, ?, ?, ?, ?)`,
        [req.body.nombre, req.body.apellido, req.body.edad, req.body.cedula, req.body.correo, req.body.contraseña],
        function(error, results, fields){
            (error)
            ? res.json(error)
            : res.json(results)
        });    
};

const update = (req, res = response ) => {
    conexion.query("update usuarios set nombre = ?, apellido = ?, edad = ?, cedula = ?, correo = ?, contraseña = ? where id_usuario = ? ",
    [req.body.nombre, req.body.apellido, req.body.edad, req.body.cedula, req.body.correo, req.body.contraseña, req.params.id],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });
};

const remove = (req, res = response ) => {
    conexion.query("delete from usuarios where id_usuario = ?",
    [req.params.id],
    function(error, results, fields){
        (error)
        ? res.json(error)
        : res.json(results)
    });
};

module.exports = {
    
    find,
    findOne,
    create,
    update,
    remove
};