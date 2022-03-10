module.exports = (app)=>{
    //atender a requisição /localizacao com o conteúdo de pagina4.ejs
    app.get('/localizacao',(req,res)=>{
        res.render('pagina4.ejs')
    })

    //atender a requisição /mapa exibindo o site maps.google.com
    app.get('/mapa',(req,res)=>{
        res.redirect('http://maps.google.com')
    })
}