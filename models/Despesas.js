const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Despesas = SequelizeDB.define('despesas', {
    id_despesa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    valor: Sequelize.DECIMAL(10, 2),
    validador: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    timestamps: false,
});

Despesas.sync();

module.exports = Despesas;