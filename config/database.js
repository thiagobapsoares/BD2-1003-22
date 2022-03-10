const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://userAdmin:eugostodasenhaumarizal9@fiaptecnico.hatvo.mongodb.net/fiap?retryWrites=true&w=majority')
    //conexão local
    //mongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
