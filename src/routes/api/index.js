const Router = require('express').Router();
const usuariosRouter = require('./usuarios');
const linguagensRouter = require('./linguagens');

const endpoints = {
  message: 'essa é a API da nossa rede social',
  endpoints: {}
};

Router.get('/', (req, res, next) => res.json(endpoints));
//Router.use('/rota', usuariosRouter);

module.exports = Router;
