//Constantes
const axios = require('axios');
const Clientes = require('../models/Clientes');

//Controller
module.exports = {
    async store(req,res){

        const { name, cpf, tel, email, end, endsec } = req.body;

        const clientes = await Clientes.create({
            name,
            cpf,
            tel,
            email,
            end,
            endsec
        })
        return res.json(clientes);
    }
};