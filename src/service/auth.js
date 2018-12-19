const { sign, verify } = require('jsonwebtoken');
const { randomBytes, pbkdf2Sync } = require('crypto');

const gerarSegredo = () => {
    return process.env.JWT_SECRET || 'NÃO CONTE A NINGUÉM, É SEGREDO';
};

const gerarJWT = (id, email, nome, role) => {
    const secret = gerarSegredo();
    const token = sign(
        {
            id,
            email,
            nome,
            admin: role === 'admin'
        },
        secret
    );
    return { token };
};

const gerarCredenciais = senha => {
    const salt = randomBytes(16).toString('hex');
    const hash = pbkdf2Sync(senha, salt, 1000, 512, 'sha512').toString('hex');

    return { salt, hash };
};

const senhaConfere = (senha, cadastrado) => {
    return (
        cadastrado.hash ===
        pbkdf2Sync(senha, cadastrado.salt, 1000, 512, 'sha512').toString('hex')
    );
};

const verificarToken = (token, callback) => {
    const secret = gerarSegredo();
    return verify(token, secret, callback);
};

module.exports = { gerarCredenciais, gerarJWT, senhaConfere, verificarToken };
