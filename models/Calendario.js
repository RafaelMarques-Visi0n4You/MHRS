const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Calendario = SequelizeDB.define('calendario', {
    id_calendario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    dias_ferias_ano_atual: Sequelize.INTEGER,
    dias_ferias_ano_anterior: Sequelize.INTEGER,
},
{
    timestamps: false,
});

Calendario.sync();

module.exports = Calendario;