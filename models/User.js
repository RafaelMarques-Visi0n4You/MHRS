const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var User = SequelizeDB.define('USER', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.CHAR(256),
    nome_utilizador: Sequelize.CHAR(256),
    pass: Sequelize.CHAR(256),
    email: Sequelize.CHAR(256),
    morada: Sequelize.CHAR(256),
    telemovel: Sequelize.INTEGER,
    data_nascimento: Sequelize.DATE,
    genero: Sequelize.CHAR(256),
    pais_regiao: Sequelize.CHAR(256),
},
{
    timestamps: false,
});


User.sync();

module.exports = User;