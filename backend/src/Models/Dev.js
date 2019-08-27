const { Schema, model } = require('mongoose');

//Estrutura da tabela que será gravada no banco de dados
const DevSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    deslikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
}, {
    timestamps: true,
    /*timestamps Cria de forma automática uma coluna com o nome CreateAt e outra updateAt 
    em cada registro feito. CreateAt = cria data de registro e UpdateAt = armazena a data 
    da última alteração do registro */
});

module.exports = model('Dev', DevSchema);