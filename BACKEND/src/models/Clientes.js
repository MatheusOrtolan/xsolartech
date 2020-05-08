const { Schema, model } = require('mongoose');

//Criando Schema/Model
const clientesSchema = new Schema ({

    name: {
        type: String,
        required: true  
    },

    cpf: {
        type: String,
        required: true,
    },

    tel:
    {
        type: String,
        required: true 
    },

    email:
    {
        type: String,
        required: true 
    },

    end:
    {
        type: String,
        required: true 
    }, 

    endsec:
    {
        type: String,
        required: true 
    },
    
}, {
    timestamps: true,
});

//Exportando Schema/Model
module.exports = model('Clientes', clientesSchema);