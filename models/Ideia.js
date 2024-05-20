const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Ideia = SequelizeDB.define('ideia', {
    id_ideia: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo_ideia: Sequelize.CHAR(256),
    descricao: Sequelize.TEXT,
    data_criacao: Sequelize.DATE,
    estado: Sequelize.CHAR(256),
    ficheiro_complementar: Sequelize.TEXT,
    validador: Sequelize.CHAR(256),
    comentarios: Sequelize.TEXT,
},
{
    timestamps: false,
});

Ideia.sync();

module.exports = Ideia;