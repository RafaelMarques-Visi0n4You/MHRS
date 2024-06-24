const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Departamento = require('./Departamento');

var Vaga = SequelizeDB.define('vaga', {
    id_vaga: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_departamento:{
        type:Sequelize.INTEGER,
        references:{
            model: Departamento,
            key: 'id_departamento'
        }
    },
    descricao: Sequelize.TEXT,
    titulo_vaga: Sequelize.CHAR(256),
    requisitos: Sequelize.TEXT,
},
{
    tableName: 'VAGA',
    timestamps: false,
    freezeTableName: true
});

Vaga.sync();

module.exports = Vaga;