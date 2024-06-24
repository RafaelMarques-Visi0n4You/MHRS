const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Vaga = require('./Vaga');

var Candidaturas = SequelizeDB.define('candidaturas', {
    id_candidatura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_vaga:{
        type:Sequelize.INTEGER,
        references:{
            model: Vaga,
            key: 'id_vaga'
        }
    },
    data_submissao: Sequelize.DATE,
    status: Sequelize.CHAR(256),
    curriculo: Sequelize.TEXT,
    informacoes_contacto: Sequelize.TEXT,
},
{
    tableName: 'CANDIDATURAS',
    timestamps: false,
    freezeTableName: true
});


Candidaturas.sync();

module.exports = Candidaturas;