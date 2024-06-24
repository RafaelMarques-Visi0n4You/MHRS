const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Despesas = require('./Despesas');
const Ideia = require('./Ideia');

var Departamento = SequelizeDB.define('departamento', {
    id_departamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_ideia:{
        type:Sequelize.INTEGER,
        references:{
            model: Ideia,
            key: 'id_ideia'
        }
    },
    id_despesa:{
        type:Sequelize.INTEGER,
        references:{
            model: Despesas,
            key: 'id_despesa'
        }
    },
    nome_departamento: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
    responsavel_departamento: Sequelize.CHAR(256),
},
{
    tableName: 'DEPARTAMENTO',
    timestamps: false,
    freezeTableName: true
});

Departamento.sync();

module.exports = Departamento;