const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Departamento = SequelizeDB.define('departamento', {
    id_departamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_departamento: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
    responsavel_departamento: Sequelize.CHAR(256),
},
{
    timestamps: false,
});

Departamento.sync();

module.exports = Departamento;