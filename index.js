const express = require ('express')
const app = express()
var bodyParser = require ('body-parser')
var cookieParser = require ('cookie-parser')
var path = require('path')


app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine ','ejs')

app.use(express.static(path.join(__dirname,'public')))


app.get('/', function(req,resp){
    resp.render('index.ejs',{})
})
app.get('/usuarios', function(req,resp){
    resp.render('usuarios.ejs',{usuarios:[
        {nome:"Hágatha", email:"hagatha@gmail.com"},
        {nome:"Mateus", email:"mateus@gmail.com"},
        {nome:"Alice", email:"Alice@gmail.com"},
        {nome:"Sarah", email:"Sarah@gmail.com"},
        {nome:"Joaquim", email:"joaquim@gmail.com"},
        {nome:"Elisa", email:"Elisa@gmail.com"},
    ]})

})

app.listen(3000,function(){
 console.log('conexão inicializada')
})

