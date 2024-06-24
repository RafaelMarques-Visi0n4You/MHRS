const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Notificacoes = SequelizeDB.define('notificacoes', {
    id_notificacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mensagem: Sequelize.TEXT,
    data: Sequelize.DATE,
    estado: Sequelize.CHAR(256),
},
{
    timestamps: false,
});

Notificacoes.sync();

module.exports = Notificacoes;