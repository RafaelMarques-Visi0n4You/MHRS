const Visita = require('../models/Visita');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.visitas_adicionar = async(req, res) => {
    const { titulo_publicacao, local_visita, data_visita, duracao_visita, motivo_visita, tipo_publicacao, descricao, id_user} = req.body;
    const imagem = req.file ? req.file.path : null;
    const data = await Blog.create({
        tipo_publicacao: tipo_publicacao,
        descricao: descricao,
        imagem: imagem,
        titulo_publicacao: titulo_publicacao,
        local_visita: local_visita,
        data_visita: data_visita,
        duracao_visita: duracao_visita,
        motivo_visita: motivo_visita,
        id_user: id_user,
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.visitas_detalhes = async (req, res) => {
    const { id_visita } = req.body;
    const data = await Visita.findOne({
        where: {
            id_visita: id_visita
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.visitas_eliminar = async (req, res) => {
    const { id_visita } = req.body;
    const data = await Visita.destroy({
        where: {
            id_visita: id_visita
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.visitas_editar = async (req, res) => {
    const { id_visita, titulo_publicacao, descricao } = req.body;
    const data = await Visita.update({
        titulo_publicacao: titulo_publicacao,
        descricao: descricao,
    }, {
        where: {
            id_visita: id_visita
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.visitas_lista = async (req, res) => {
    const data = await Visita.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;
