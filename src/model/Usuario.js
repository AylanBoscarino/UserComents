const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        hash: { type: String, required: false },
        salt: { type: String, required: false },
        admin: { type: Boolean, default: false }
    },
    { collection: 'usuarios' }
);

module.exports = mongoose.model('Usuario', UsuarioSchema);
