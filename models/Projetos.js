const Sequelize = require('sequelize');
const SequelizeDB = require('./database');

var Projetos = SequelizeDB.define('projetos', {
    id_projeto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo_projeto: Sequelize.CHAR(256),
    estado: Sequelize.CHAR(256),
    data_atribuicao: Sequelize.DATE,
    descricao: Sequelize.TEXT,
    objetivos: Sequelize.TEXT,
    data_inicio: Sequelize.DATE,
    data_final_prevista: Sequelize.DATE,
},
{
    timestamps: false,
});



Projetos.sync();

module.exports = Projetos;