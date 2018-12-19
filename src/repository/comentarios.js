const Comentario = require('../model/Comentario');
const Usuario = require('../model/Usuario');

const criarComentario = (autor, corpo) => {
    const data = new Date();
    const dataCriacao = Math.round(data.getTime() / 1000);
    const comentario = new Comentario({ autor, corpo, dataCriacao });
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

const editarComentario = async (idUsuario, idComentario, corpo) => {
    const usuario = await Usuario.findOne({ _id: idUsuario });
    const comentario = await Comentario.findOne({ _id: idComentario });

    console.log(idUsuario, comentario.autor);
    if (
        !comentario.ativo ||
        !Object.keys(usuario).length > 0 ||
        idUsuario != comentario.autor ||
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

module.exports = {
    criarComentario,
    listarComentariosAtivos,
    listarTodosComentarios,
    editarComentario,
    corpoComentario,
    removerComentario
};
