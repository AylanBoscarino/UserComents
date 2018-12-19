const Comentario = require('../model/Comentario');
const Usuario = require('../model/Usuario');

const criarComentario = (idUsuario, corpo) => {
    const dateUnixTimestamp = new Date.getTime() / 1000;
    const comentario = new Comentario(idUsuario, corpo, dateUnixTimestamp);
    comentario.save();
    return comentario;
};

const removerComentario = idComentario => {
    return Comentario.findOneAndUpdate(
        { _id: idComentario },
        { $set: { ativo: false } }
    );
};

const corpoComentario = idComentario => {
    return Comentario.findOne({ _id: idComentario, ativo: true });
};

const editarcomentario = async (idUsuario, idComentario, corpo) => {
    const usuario = await Usuario.find({ _id: idUsuario });
    const comentario = await Comentario.findOne({ _id: idComentario });

    if (
        !comentario.ativo ||
        !usuario._id ||
        idUsuario !== comentario.autor ||
        !usuario.admin
    ) {
        return [];
    }

    comentario.corpo = corpo;
    await comentario.save();
    return comentario;
};

const listarComentariosAtivos = () => {
    return Comentario.find({ ativo: true });
};

const listarTodosComentarios = () => {
    return Comentario.find({});
};
