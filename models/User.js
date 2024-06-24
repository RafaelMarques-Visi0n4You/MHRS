const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Empresa = require('./Empresa');
const Ferias = require('./Ferias');
const Faltas = require('./Faltas');
const Departamento = require('./Departamento');
const Calendario = require('./Calendario')

var User = SequelizeDB.define('USER', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_empresa:{
        type:Sequelize.INTEGER,
        references:{
            model: Empresa,
            key: 'id_empresa',
        }
    },
    id_departamento:{
        type:Sequelize.INTEGER,
        references:{
            model: Departamento,
            key: 'id_departamento',
        }
    },
    id_solicitacao:{
        type:Sequelize.INTEGER,
        references:{
            model: Ferias,
            key: 'id_solicitacao'
        }
    },
    id_falta:{
        type:Sequelize.INTEGER,
        references:{
            model: Faltas,
            key: 'id_falta'
        }
    },
    id_calendario:{
        type:Sequelize.INTEGER,
        references:{
            model: Calendario,
            key: 'id_calendario'
        }
    },
    nome: Sequelize.CHAR(256),
    nome_utilizador: Sequelize.CHAR(256),
    pass: Sequelize.CHAR(256),
    email: Sequelize.CHAR(256),
    morada: Sequelize.CHAR(256),
    telemovel: Sequelize.INTEGER,
    data_nascimento: Sequelize.DATE,
    genero: Sequelize.CHAR(256),
    pais_regiao: Sequelize.CHAR(256),
    tipo_user: Sequelize.CHAR(256),
},
    {
        tableName: 'USER',
        timestamps: false,
        freezeTableName: true
    });

User.sync();
module.exports = User;