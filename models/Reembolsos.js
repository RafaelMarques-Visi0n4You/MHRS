const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Reembolsos = SequelizeDB.define('reembolsos', {
    id_reembolso: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: Sequelize.DATE,
    descricao: Sequelize.CHAR(256),
    valor: Sequelize.DECIMAL(10, 2),
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    timestamps: false,
});


Reembolsos.sync();

module.exports = Reembolsos;