const express = require ('express')
const app = express()

app.get('/', function(req,resp){
    resp.send('Olá Hágatha!')
})
 app.get('/mensagem',function(req,res)
{
    res.send ('esta mensagem é automática!')
})

app.get('/sobre',function(req,res)
{
    res.send ('Esta página esta sendo ddesenvolvida por Hágatha!')
})
 
app.get('/layout',function(req,res)
{
    res.send ('Este é o novo layout!')
})

app.listen(3000,function(){
 console.log('conexão inicializada')
})

