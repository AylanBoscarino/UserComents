const repository = require('../repository/comentarios');

const listarComentariosAtivos = async (request, response, next) => {
    try {
        return response.json(await repository.listarComentariosAtivos());
    } catch (error) {
        return next(error);
    }
};

const criarComentario = async (request, response, next) => {
    try {
        return response.json(
            await repository.criarComentario(
                response.locals.payload.id,
                request.body.corpo
            )
        );
    } catch (error) {
        return next(error);
    }
};

const corpoComentario = async (request, response, next) => {
    try {
        return response.json(
            await repository.corpoComentario(request.params.id)
        );
    } catch (error) {
        return next(error);
    }
};

const editarComentario = async (request, response, next) => {
    try {
        return response.json(
            await repository.editarComentario(
                response.locals.payload.id,
                request.params.id,
                request.body.corpo
            )
        );
    } catch (error) {
        return next(error);
    }
};
const removerComentario = async (request, response, next) => {
    try {
        return response.json(
            await repository.removerComentario(request.params.id)
        );
    } catch (error) {
        return next(error);
    }
};

const listarTodosComentarios = async (request, response, next) => {
    try {
        return response.json(await repository.listarTodosComentarios);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    listarComentariosAtivos,
    listarTodosComentarios,
    removerComentario,
    editarComentario,
    corpoComentario,
    criarComentario
};
