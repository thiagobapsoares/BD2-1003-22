module.exports = (app)=>{
    //importar as configurações do database
    var conexao = require('../config/database')()
    //importar a colecão
    //var alunos = require('../models/alunos')

    //criar a rota para a requisição resultado
    app.get('/resultado',(req,res)=>    {
    //exibir todos os documentos armazenados
    alunos.find()
    .then((alunos)=>{
        res.render('resultado.ejs',{alunos:alunos})
    })
    .catch((err)=>{
        console.log("não foi possível encontrar um resultado")
    })
})
}