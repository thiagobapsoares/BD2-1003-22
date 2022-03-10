//criar uma rota para a requisição /
module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.render("index.ejs")
    })
}