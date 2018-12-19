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
            await repository.criarComentario(res.locals.payload._id, req.body)
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
                res.locals.payload._id,
                req.params.id,
                request.body
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
