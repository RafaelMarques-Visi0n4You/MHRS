const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');

var Ferias = SequelizeDB.define('ferias', {
    id_solicitacao: {
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
    data_inicio: Sequelize.DATE,
    data_conclusao: Sequelize.DATE,
    duracao: Sequelize.INTEGER,
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName:'FERIAS',
    timestamps: false,
    freezeTableName: true
});


Ferias.sync();

module.exports = Ferias;