const express = require('express')
const usuarios = express.Router();
const {  findOne, find, create, update, remove } = require('./usuarios.service');

usuarios.use(function timelog(req, res, next){
    next();
})

usuarios.get(
    '/',
    find
);
usuarios.get(
    '/:id',
    findOne
);

usuarios.post(
    '/',
    create
);

usuarios.put(
    '/:id',
    update
);

usuarios.delete(
    '/:id',
    remove
);


module.exports ={
    usuarios
};


