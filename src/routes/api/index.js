const Router = require('express').Router();
// const usuariosRouter = require('./usuarios');

const endpoints = {
    message: 'essa é a minha API',

    endpoints: {}
};

Router.get('/', (req, res, next) => res.json(endpoints));
//Router.use('/rota', usuariosRouter);

module.exports = Router;
