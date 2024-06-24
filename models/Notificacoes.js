const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');
const User = require('./User');

var Notificacoes = SequelizeDB.define('notificacoes', {
    id_notificacao: {
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
    mensagem: Sequelize.TEXT,
    data: Sequelize.DATE,
    estado: Sequelize.CHAR(256),
},
{
    tableName: 'NOTIFICACOES',
    timestamps: false,
    freezeTableName: true
});

Notificacoes.sync();

module.exports = Notificacoes;