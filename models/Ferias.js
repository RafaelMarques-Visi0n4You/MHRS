const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Ferias = SequelizeDB.define('ferias', {
    id_solicitacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_inicio: Sequelize.DATE,
    data_conclusao: Sequelize.DATE,
    duracao: Sequelize.INTEGER,
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    timestamps: false,
});


Ferias.sync();

module.exports = Ferias;