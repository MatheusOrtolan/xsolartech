const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();
const nodemailer = require('nodemailer');

//Conectando MongoDB
mongoose.connect('mongodb+srv://matheusortolan:aikxm1147@cluster0-bawwk.gcp.mongodb.net/test?retryWrites=true&w=majority',
{                
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Iniciando Servidor e usando ExpressJson e Rotas
server.use(express.json());
server.use(routes);
server.listen(3333); 