const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Blog = require('./Blog');
const User = require('./User');

var Visita = SequelizeDB.define('visita', {
    id_visita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_publicacao: {
        type: Sequelize.INTEGER,
        references: {
            model: Blog,
            key: 'id_publicacao'
        }
    },
    id_user: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id_user'
        }
    },
    titulo_publicacao: Sequelize.CHAR(256),
    tipo_publicacao: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    validador: Sequelize.CHAR(256),
    local_visita: Sequelize.CHAR(256),
    data_visita: Sequelize.DATE,
    duracao_visita: Sequelize.INTEGER,
    motivo_visita: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
    imagem: Sequelize.TEXT,
},
    {
        tableName: 'VISITA',
        timestamps: false,
        freezeTableName: true
    });


Visita.sync();

module.exports = Visita;