const Router = require('express').Router();

const controller = require('../../controller/jobs');

Router.get('/', controller.index);

module.exports = Router;