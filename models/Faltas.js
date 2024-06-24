const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Calendario = require('./Calendario');
const User = require('./User');
const Empresa = require('./Empresa');

var Faltas = SequelizeDB.define('falta', {
    id_falta: {
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
    id_calendario:{
        type:Sequelize.INTEGER,
        references:{
            model: Calendario,
            key: 'id_calendario'
        }
    },
    data_falta: Sequelize.DATE,
    justificacao: Sequelize.TEXT,
    tipo: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName: 'FALTAS',
    timestamps: false,
    freezeTableName: true
});


Faltas.sync();

module.exports = Faltas;