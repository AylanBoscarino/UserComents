const Comentario = require('../model/Comentario');
const Usuario = require('../model/Usuario');

const criarComentario = async (autor, corpo) => {
    const data = new Date();
    const dataCriacao = Math.round(data.getTime() / 1000);
    const dadosAutor = await Usuario.findOne(
        { _id: autor },
        { _id: 0, nome: 1 }
    );
    const nomeAutor = dadosAutor.nome;
    console.log({ nomeAutor });
    const comentario = new Comentario({ autor, corpo, dataCriacao, nomeAutor });
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
    return Comentario.findOne({ _id: idComentario, ativo: true }, { autor: 0 });
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

const listarComentariosAtivos = async () => {
    return Comentario.find({ ativo: true }, { autor: 0 });
};

const listarTodosComentarios = () => {
    return Comentario.find({}, { autor: 0 });
};

module.exports = {
    criarComentario,
    listarComentariosAtivos,
    listarTodosComentarios,
    editarComentario,
    corpoComentario,
    removerComentario
};
