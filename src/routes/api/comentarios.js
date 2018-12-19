const Router = require('express').Router();
const controller = require('../../controller/comentarios');
const { autenticarRequisicao } = require('../../middleware/auth');

Router.get('/', controller.listarComentariosAtivos);

Router.use(autenticarRequisicao);

Router.post('/', controler.criarComentario);

Router.get('/:id', controller.corpoComentario);

Router.put('/:id', controller.editarComentario);

Router.delete('/:id', controller.removerComentario);
