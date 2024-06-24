const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Blog = require('./Blog')
const User = require('./User')

var Noticia = SequelizeDB.define('noticia', {
    id_noticia: {
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
    validador: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    data_noticia: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    imagem: Sequelize.TEXT,
},
{
    tableName: 'NOTICIA',  
    timestamps: false,
    freezeTableName: true
});


Noticia.sync();

module.exports = Noticia;