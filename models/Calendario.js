const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const User = require('./User');
const Empresa = require('./Empresa');

var Calendario = SequelizeDB.define('calendario', {
    id_calendario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_empresa:{
        type:Sequelize.INTEGER,
        references:{
            model: Empresa,
            key: 'id_empresa'
        }
    },
    data: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    dias_ferias_ano_atual: Sequelize.INTEGER,
    dias_ferias_ano_anterior: Sequelize.INTEGER,
},
{
    tableName: 'CALENDARIO',
    timestamps: false,
    freezeTableName: true
});

Calendario.sync();

module.exports = Calendario;