const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    typeDocument: {
        type: String,
        enum: ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Cédula de extranjería'],
        required: true,
    },
    documentNumber: {
        type: String,
        unique: true,
        required: true,
    },
    names: {
        type: String,
        required: true,
    },
    lastNames: {
        type: String,
        required: true,
    },
    sexGender: {
        type: String,
        enum: ['Hombre', 'Mujer', 'Intersexual', 'Indefinido', 'Prefieren no decir'],
        required: true,
    },
    telNumber: String,
    landline: String,
    email: {
        type: String,
        required: true,
    },
    municipality: {
        type: String,
        required: true,
    },
    adress: String,
    neighborhood: {
        type: String,
        required: true,
    },
    bornDate: {
        type: Date,
        required: true,
    },
    ethnicity: String,
    disability: String,
    residentalStratum: Number,
    lastEducationalLevel: String,
    accessDevices: Boolean,
    typeDevices: String,
    internetConnectivity: Boolean,
    affiliationRegime: {
        type: String,
        enum: ['Subsidiado', 'Contributivo'],
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});

module.exports = mongoose.model('_User', userSchema);
