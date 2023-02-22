const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const RecruteurSchema = new Schema(
    {
        email: { type: String, required: true, unique: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true
    },   
)

const RecruteurModel = model('Recruteur', RecruteurSchema);
module.exports = RecruteurModel;