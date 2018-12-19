const Usuario = require('../model/Usuario');
const { gerarCredenciais, gerarJWT, senhaConfere } = require('../service/auth');

const cadastrarUsuario = dadosUsuario => {
    return Usuario.find({ email: dadosUsuario.email }).then(data => {
        const usuario = { cadastrado: false };
        if (!data.length) {
            if (dadosUsuario.admin) dadosUsuario.admin = undefined;
            usuario.novo = new Usuario(dadosUsuario);

            const credenciais = gerarCredenciais(dadosUsuario.senha);
            usuario.novo.salt = credenciais.salt;
            usuario.novo.hash = credenciais.hash;
            usuario.token = gerarJWT(
                usuario.novo.id,
                usuario.novo.email,
                usuario.novo.nome,
                'normal'
            );
            usuario.novo.save();
            usuario.cadastrado = true;
        }
        return usuario;
    });
};

const logarUsuario = (email, senha) => {
    return Usuario.findOne({ email }).then(cadastrado => {
        const usuario = { autenticado: false };
        if (cadastrado && senhaConfere(senha, cadastrado)) {
            usuario.token = gerarJWT(
                cadastrado.id,
                cadastrado.email,
                cadastrado.nome
            );
            usuario.autenticado = true;
        }
        return usuario;
    });
};

const checarAdmin = idUsuario => {
    return Usuario.findById(idUsuario).then(usuario => {
        if (!usuario || !usuario.admin) {
            return false;
        }
        return true;
    });
};

module.exports = { cadastrarUsuario, logarUsuario, checarAdmin };
