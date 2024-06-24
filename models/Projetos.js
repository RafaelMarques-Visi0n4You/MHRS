const Sequelize = require('sequelize');
const SequelizeDB = require('./database');
const Ideia = require('./Ideia');
const User = require('./User');

var Projetos = SequelizeDB.define('projetos', {
    id_projeto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_ideia:{
        type:Sequelize.INTEGER,
        references:{
            model: Ideia,
            key: 'id_ideia'
        }
    },
    id_user:{
        type:Sequelize.INTEGER,
        references:{
            model: User,
            key: 'id_user'
        }
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
    tableName: 'PROJETOS',
    timestamps: false,
    freezeTableName: true
});



Projetos.sync();

module.exports = Projetos;