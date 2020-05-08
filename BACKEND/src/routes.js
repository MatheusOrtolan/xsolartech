const express = require('express');
const ClientesController = require('./controllers/ClientesController');

//Importando Nodemailer
const nodemailer = require('nodemailer');

//Importando Modelo
const clientes = require ('../src/models/Clientes');

//Criando Rotas Express
const routes = express.Router(); 

//Criando Transport Nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'grigolmatheus@gmail.com',
        pass:''
    }
});

//Rota Email
routes.post("/send-email", (req,res)=>{

    let mailOptions = {
        from:'grigolmatheus@gmail.com',
        to:'',
        subject:'Cadastro de Cliente',
        text:'Cliente cadastrado com sucesso!'
    };

    transporter.sendMail(mailOptions, function(err,data){
        if(err) {
            console.log('Ocorreu um erro', err);
        }
        else{
            console.log('Email enviado, deu certo');
        }
    });
});

//Usando Controller
routes.post('/clientes', ClientesController.store);

//Get All Simples
routes.get('/visualizar', function(req,res){
    clientes.find({}, function(err,clientes){
        if(err) console.warn(err);
        res.send(clientes);
    })
});

//Get por Id
routes.get('/visualizar/:id', function(req,res){
    clientes.findById(req.params.id, function(err,clientes){
        if(err) console.warn(err);
        res.send(clientes);
    })
});

//Deletar Cliente por Nome
routes.delete('/delete/:name', function(req,res){
    
    clientes.deleteOne({name: req.params.name}, function(err,clientes){
        if(err) console.warn(err);
        res.send(clientes);
    })
});

//Editar Cliente por Id
routes.post('/clientes/update/:id', function(req,res){
    clientes.findById(req.params.id)
    .then(clientes =>{
        clientes.name = req.body.name;
        clientes.cpf = req.body.cpf;
        clientes.tel = req.body.tel;
        clientes.email = req.body.email;
        clientes.end = req.body.end;
        clientes.endsec = req.body.endsec;
        clientes.save()
        .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});
 
//Exportar Rotas
module.exports = routes;