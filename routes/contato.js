module.exports = (app)=>{
    //abre o formulário do contato
    app.get("/contato",(req,res)=>{
        res.render('contato.ejs')
    })

    //receber os dados do formulário contato
    app.post('/contato',(req,res)=>{
        var dados = req.body
        //importar a config database
        var conexao = require('../config/database')()
        //importar o modelo de alunos
        var alunos = require('../models/alunos')
        //vincular os dados do formulário com o modelo
        var documento = new alunos({
            nome:dados.nome,
            rm:dados.rm,
            turma:dados.turma,
            idade:dados.idade
        }).save()
        //res.send(dados)
        res.render('resultado.ejs',{dados:dados})
    })
}