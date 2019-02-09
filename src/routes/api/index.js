const Router = require('express').Router();
const usuariosRouter = require('./usuarios');
const comentariosRouter = require('./comentarios');
const jobsRouter = require('./jobs');

const endpoints = {
    message: 'essa é a minha API',

    endpoints: {}
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/comentarios', comentariosRouter);
Router.use('/jobs', jobsRouter);

module.exports = Router;
