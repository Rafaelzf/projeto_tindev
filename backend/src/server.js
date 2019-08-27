// importa o express
const express = require('express');
//importa o mongoose
const mongoose = require('mongoose');
//importa socket.io
const io = require('socket.io');
//importa o cors
const cors = require('cors');
//importa as rotas
const routes = require('./routes')
    // instancia o servidor
const server = express();

//Conexão com banco de dados
mongoose.connect('mongodb+srv://rafaelzf:rafaelzf@cluster0-7eoaq.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333);