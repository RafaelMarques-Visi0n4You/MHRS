const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');
const User = require('./User');
const Despesas = require('./Despesas');

var Reembolsos = SequelizeDB.define('reembolsos', {
    id_reembolso: {
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
    id_user:{
        type:Sequelize.INTEGER,
        references:{
            model: User,
            key: 'id_user'
        }
    },
    id_despesa:{
        type:Sequelize.INTEGER,
        references:{
            model: Despesas,
            key: 'id_despesa'
        }
    },
    data: Sequelize.DATE,
    descricao: Sequelize.CHAR(256),
    valor: Sequelize.DECIMAL(10, 2),
    estado: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    tableName: 'REEMBOLSOS',
    timestamps: false,
    freezeTableName: true
});


Reembolsos.sync();

module.exports = Reembolsos;