const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Vaga = SequelizeDB.define('vaga', {
    id_vaga: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: Sequelize.TEXT,
    titulo_vaga: Sequelize.CHAR(256),
    requisitos: Sequelize.TEXT,
},
{
    timestamps: false,
});

Vaga.sync();

module.exports = Vaga;