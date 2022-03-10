module.exports = (app)=>{
    //atender a requisicao /portifolio com o conteúdo de portifolio.ejs
    app.get('/portifolio',(req,res)=>{
        res.render('portifolio.ejs')
    })

}