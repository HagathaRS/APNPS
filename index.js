const express = require ('express')
const app = express()

app.get('/', function(req,resp){
    resp.send('Olá visitante')
})


app.listen(3000,function(){
 console.log('conexão inicializada na porta 3000')
})
