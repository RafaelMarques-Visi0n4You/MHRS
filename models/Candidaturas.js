const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Candidaturas = SequelizeDB.define('candidaturas', {
    id_candidatura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_submissao: Sequelize.DATE,
    status: Sequelize.CHAR(256),
    curriculo: Sequelize.TEXT,
    informacoes_contacto: Sequelize.TEXT,
},
{
    timestamps: false,
});


Candidaturas.sync();

module.exports = Candidaturas;