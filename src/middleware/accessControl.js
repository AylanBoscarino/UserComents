const { checarAdmin } = require('../repository/usuarios');

const usuarioAdmin = (req, res, next) => {
    const idUsuario = res.locals.payload.usuario.id;
    return checarAdmin(idUsuario).then(isAdmin => {
        if (!isAdmin) {
            return res
                .status(401)
                .json({ msg: 'Usuário não possui permissão' });
        }
        return next();
    });
};

module.exports = { usuarioAdmin };
