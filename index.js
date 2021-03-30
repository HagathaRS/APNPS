const express = require ('express')
const app = express()

app.get('/', function(req,resp){
    resp.send('Olá Hágatha!')
})


app.listen(3000,function(){
 console.log('conexão inicializada')
})

