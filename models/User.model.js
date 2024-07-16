const mongoose = require('mongoose')
const Role = require('./Role.model')
const userSchema = new mongoose.Schema({
    roleId: {type: mongoose.Schema.Types.ObjectId, ref: '_Role' },
    typeDocument: {
        type: String,
        enum: ['Cedula Ciudadania', 'Tarjeta de Identidad', 'Cedula de exranjeria'],
        required: true
    },
    documentNumber: { type: String, unique: true, required: true},
    completeNames: { type: String, required: true },
    lastNames: { type: String, required: true },
    sexGender: { 
        type: String,
        enum: ['Hombre', 'Mujer', 'Intersexual', 'Indefinido', 'Prefiero no decir'],
        required: true },
    telNumber: String,
    landline: String,
    email: { type: String, required: true },
    municipality: { type: String, required: true },
    adress: String,
    neighborhood: { type: String, required: true }, 
    bornDate: { type: Date, required: true },
    ethnicity: { type: String, required: true },
    disability: { type: String, required: true },
    residentalStratum: { type: String, required: true },
    lastEducationalLevel: { type: String, required: true },
    accessDevices: { type: Boolean, required: true },
    typeDevices: { type: String, nullable: true },
    internetConnectivity: Boolean,
    affiliationRegime: {
        type: String,
        enum: ['Subsidiado', 'Contributivo'], 
        required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model('_User', userSchema)

