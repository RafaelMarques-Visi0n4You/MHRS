const sequelize = require('../config/database');
const User = require('./User');
const Projetos = require('./Projetos');
const Despesas = require('./Despesas');
const Blog = require('./Blog');
const Visita = require('./Visita');
const Noticia = require('./Noticia');
const Empresa = require ('./Empresa');
const Departamento = require('./Departamento')
const Ferias = require('./Ferias')
const Faltas = require('./Faltas')
const Calendario = require ('./Calendario');
const Candidaturas = require('./Candidaturas');
const Ideia = require('./Ideia');
const Vaga = require('./Vaga');
const Reembolsos = require('./Reembolsos');
const Perfil_visitante = require('./Perfil_visitante');
const Notificacoes = require('./Notificacoes');

// Associações
User.hasMany(Despesas, { foreignKey: 'id_user' });
Despesas.belongsTo(User, { foreignKey: 'id_user' });

Projetos.hasMany(Despesas, { foreignKey: 'projetoAssociado' });
Despesas.belongsTo(Projetos, { foreignKey: 'projetoAssociado' });

Blog.hasMany(Noticia, { foreignKey: 'id_publicacao' });
Noticia.belongsTo(Blog, { foreignKey: 'id_publicacao' });

Blog.hasMany(Visita,  { foreignKey: 'id_publicacao' });
Visita.belongsTo(Blog,  { foreignKey: 'id_publicacao' });

Empresa.hasMany(User, {foreignKey: 'id_empresa'});
User.belongsTo(Empresa, {foreignKey: 'id_empresa'});

Departamento.hasMany(User, {foreignKey: 'id_departamento'});
User.belongsTo(Departamento, {foreignKey: 'id_departamento'});

Ferias.hasMany(User, {foreignKey: 'id_solicitacao'});
User.belongsTo(Ferias, {foreignKey: 'id_solicitacao'});

Calendario.hasMany(User, {foreignKey: 'id_calendario'});
User.belongsTo(Calendario, {foreignKey: 'id_calendario'});

Faltas.hasMany(User, {foreignKey: 'id_falta'});
User.belongsTo(Faltas, {foreignKey: 'id_falta'});

Ferias.hasMany(User, {foreignKey: 'id_solicitacao'});
User.belongsTo(Ferias, {foreignKey: 'id_solicitacao'});

Vaga.hasMany(Candidaturas, {foreignKey: 'id_vaga'});
Candidaturas.belongsTo(Vaga, {foreignKey: 'id_vaga'});

Ideia.hasMany(Departamento, {foreignKey: 'id_ideia'});
Departamento.belongsTo(Ideia, {foreignKey: 'id_ideia'});

Despesas.hasMany(Departamento, {foreignKey: 'id_despesa'});
Departamento.belongsTo(Despesas, {foreignKey: 'id_despesa'});

Departamento.hasMany(Vaga, {foreignKey: 'id_departamento'});
Vaga.belongsTo(Departamento, {foreignKey: 'id_departamento'});

Empresa.hasMany(Reembolsos, {foreignKey: 'id_empresa'});
Reembolsos.belongsTo(Empresa, {foreignKey: 'id_empresa'});

User.hasMany(Reembolsos, {foreignKey: 'id_user'});
Reembolsos.belongsTo(User, {foreignKey: 'id_user'});

Despesas.hasMany(Reembolsos, {foreignKey: 'id_despesa'});
Reembolsos.belongsTo(Despesas, {foreignKey: 'id_despesa'});

Ideia.hasMany(Projetos, {foreignKey: 'id_ideia'});
Projetos.belongsTo(Ideia, {foreignKey: 'id_ideia'});

Empresa.hasMany(Perfil_visitante, {foreignKey: 'id_empresa'});
Perfil_visitante.belongsTo(Empresa, {foreignKey: 'id_empresa'});

Empresa.hasMany(Notificacoes, {foreignKey: 'id_empresa'});
Notificacoes.belongsTo(Empresa, {foreignKey: 'id_empresa'});

User.hasMany(Notificacoes, {foreignKey: 'id_user'});
Notificacoes.belongsTo(User, {foreignKey: 'id_user'});

Projetos.hasMany(Ideia, {foreignKey: 'id_projeto'});
Ideia.belongsTo(Projetos, {foreignKey: 'id_projeto'});

Empresa.hasMany(Ideia, {foreignKey: 'id_empresa'});
Ideia.belongsTo(Empresa, {foreignKey: 'id_empresa'});

User.hasMany(Ideia, {foreignKey: 'id_user'});
Ideia.belongsTo(User, {foreignKey: 'id_user'});

Empresa.hasMany(Calendario, {foreignKey: 'id_empresa'});
Calendario.belongsTo(Empresa, {foreignKey: 'id_empresa'});

Empresa.hasMany(Faltas, {foreignKey: 'id_empresa'});
Faltas.belongsTo(Empresa, {foreignKey: 'id_empresa'});

Calendario.hasMany(Faltas, {foreignKey: 'id_calendario'});
Faltas.belongsTo(Calendario, {foreignKey: 'id_calendario'});

Empresa.hasMany(Ferias, {foreignKey: 'id_empresa'});
Ferias.belongsTo(Empresa, {foreignKey: 'id_empresa'});

User.hasMany(Visita, {foreignKey: 'id_user'});
Visita.belongsTo(User, {foreignKey: 'id_user'});

User.hasMany(Noticia, {foreignKey: 'id_user'});
Noticia.belongsTo(User, {foreignKey: 'id_user'});

User.hasMany(Projetos, {foreignKey: 'id_user'});
Projetos.belongsTo(User, {foreignKey: 'id_user'});

module.exports = {
    sequelize,
    User,
    Projetos,
    Despesas,
    Blog,
    Noticia,
    Visita, 
    Ferias,
    Faltas,
    Departamento,
    Calendario,
    Empresa,
    Candidaturas,
    Ideia,
    Vaga,
    Reembolsos,
    Perfil_visitante,
    Notificacoes
};
