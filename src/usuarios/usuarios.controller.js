const express = require('express')
const usuarios = express.Router();
const {  findOne, find, create, update, remove } = require('./usuarios.service');

usuarios.use(function timeLog(req, res, next){
    next();
})

usuarios
        .get('/',find)
        .get('/:id',findOne)
        .post('/',create)
        .put('/:id',update)
        .delete('/:id',remove);

module.exports = {
    usuarios
};


