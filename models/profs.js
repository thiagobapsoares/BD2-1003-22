const mongoose = require('mongoose')

const modelo = new mongoose.Schema({
    nome:String,
    disciplina:String,
    turma:String,
    email:String
})

module.exports = mongoose.model('profs',modelo)