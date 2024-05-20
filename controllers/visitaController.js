const Visita = require('../models/Visita');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.visitas_adicionar = async(req, res) => {
    const { tipo_publicacao, descricao } = req.body;
    const data = await Visita.create({
        tipo_publicacao: tipo_publicacao,
        descricao: descricao,
    })
    .then(function(data) {
        return data
    })
    .catch(error => {
        return error;
    })
  
    res.status(200).json({
        success: true,
        message: "Visita adicionada com sucesso!",
        data: data
    });
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
