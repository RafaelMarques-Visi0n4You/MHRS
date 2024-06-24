const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Projetos = require('./Projetos');
const User = require('./User');


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
    id_user: {
        type: Sequelize.INTEGER,
        references: {
            model: User, 
            key: 'id_user'
        }
    },
    projetoAssociado: {
        type: Sequelize.INTEGER,
        references: {
            model: Projetos, 
            key: 'id_projeto'
        }
    }
},
{
    tableName: "DESPESAS",
    timestamps: false,
    freezeTableName: true
});

Despesas.sync();

module.exports = Despesas;