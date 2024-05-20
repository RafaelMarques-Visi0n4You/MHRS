const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Perfil_visitante = SequelizeDB.define('perfil_visitante', {
    id_user_visitante: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_utilizador: Sequelize.CHAR(256),
    pass: Sequelize.CHAR(256),
    email: Sequelize.CHAR(256),
},
{
    timestamps: false,
});


Perfil_visitante.sync();

module.exports = Perfil_visitante;