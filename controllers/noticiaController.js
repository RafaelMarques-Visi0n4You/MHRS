const Noticia = require('../models/Noticia');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.noticias_adicionar = async(req, res) => {
    const { titulo_publicacao, descricao, data_noticia } = req.body;
    const data = await Noticia.create({
        titulo_publicacao: titulo_publicacao,
        descricao: descricao,
        data_noticia: data_noticia,
    })
    .then(function(data) {
        return data
    })
    .catch(error => {
        return error;
    })
  
    res.status(200).json({
        success: true,
        message: "Noticia adicionada com sucesso!",
        data: data
    });
  }

controllers.noticias_detalhes = async (req, res) => {
    const { id_noticia } = req.body;
    const data = await Noticia.findOne({
        where: {
            id_noticia: id_noticia
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

controllers.noticias_eliminar = async (req, res) => {
    const { id_noticia } = req.body;
    const data = await Noticia.destroy({
        where: {
            id_noticia: id_noticia
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

controllers.noticias_editar = async (req, res) => {
    const { id_noticia, titulo_publicacao, descricao, data_noticia } = req.body;
    const data = await Noticia.update({
        titulo_publicacao: titulo_publicacao,
        descricao: descricao,
        data_noticia: data_noticia,
    }, {
        where: {
            id_noticia: id_noticia
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

controllers.noticias_lista = async (req, res) => {
    const data = await Noticia.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;
