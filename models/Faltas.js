const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Faltas = SequelizeDB.define('falta', {
    id_falta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_falta: Sequelize.DATE,
    justificacao: Sequelize.TEXT,
    tipo: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    timestamps: false,
});


Faltas.sync();

module.exports = Faltas;