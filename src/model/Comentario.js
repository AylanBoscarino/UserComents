const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ComentarioSchema = new mongoose.Schema(
    {
        autor: { type: ObjectId, required: true },
        corpo: { type: String, required: true },
        dataCriacao: { type: Number, required: true },
        ativo: { type: Boolean, default: true }
    },
    { collection: 'comentarios' }
);

module.exports = mongoose.model('Comentario', ComentarioSchema);
