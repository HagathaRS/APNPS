const { Schema } = require('mongoose')
var conexao = require ('../config/conexao')

var UsuarioSchema = conexao.Schema({
    nome:{type:String},
    email:{type:String},
    senha:{type:String},
    foto:{type:String}
})

module.export = conexao.model('Usuario',UsuarioSchema)
