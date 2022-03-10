module.exports = (app)=>{
    //importando as configurações do banco de dados
    var conexao = require('../config/database')
    //importando as configurações do banco de dados
    var profs = require('../models/profs')

    //abrir o formulario professor.ejs
    //com a requisição /professor
    app.get('/professor',(req,res)=>{
        //conectar o banco de dados
        conexao()
        //executar a pesquisa de documentos na coleção professores
        profs.find()
        //se a pesquisa gerar resultado, mostrar a página e enviar os dados no formato json
        .then((profs)=>{
            res.render('professor.ejs',{dados:profs})
            //console.log(profs)
        })
        //se não for possível fazer a pesquisa, mostrar o erro no console
        .catch((err)=>{
            console.log(err)
        })
    })

    //criar a rota para a gravação dos dados do formulario professor.ejs
    app.post('/professor',(req,res)=>{        
        //receber as informações digitadas
        var infos = req.body
        //conectar o banco de dados
        conexao()
        //definir como as informações serão gravadas 
        var documento = new profs({
            nome:infos.nome,
            disciplina:infos.disciplina,
            turma:infos.turma,
            email:infos.email
        }).save()
        .then((result)=>{
            res.redirect('/professor')
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}
