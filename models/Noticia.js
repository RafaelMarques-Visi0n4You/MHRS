const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Noticia = SequelizeDB.define('noticia', {
    id_noticia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo_publicacao: Sequelize.CHAR(256),
    tipo_publicacao: Sequelize.CHAR(256),
    validador: Sequelize.CHAR(256),
    data_validacao: Sequelize.DATE,
    data_noticia: Sequelize.DATE,
    descricao: Sequelize.TEXT,
},
{
    timestamps: false,
});


Noticia.sync();

module.exports = Noticia;