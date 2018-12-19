const Router = require('express').Router();
const usuariosRouter = require('./usuarios');
const comentariosRouter = require('./comentarios');

const endpoints = {
    message: 'essa é a minha API',

    endpoints: {}
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/comentarios', comentariosRouter);

module.exports = Router;
