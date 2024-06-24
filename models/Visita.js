const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Visita = SequelizeDB.define('visita', {
    id_visita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo_publicacao: Sequelize.CHAR(256),
    tipo_publicacao: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    validador: Sequelize.CHAR(256),
    local_visita: Sequelize.CHAR(256),
    data_visita: Sequelize.DATE,
    duracao_visita: Sequelize.INTEGER,
    motivo_visita: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
},
{
    timestamps: false,
});


Visita.sync();

module.exports = Visita;