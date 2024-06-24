const Projetos = require('../models/Projetos');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.projetos_lista = async (req, res) => {
    const data = await Projetos.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.projetos_adicionar = async (req, res) => {
    const {titulo_projeto, descricao, objetivos, data_inicio, data_final_prevista} = req.body;
    const data = await Projetos.create({
        titulo_projeto: titulo_projeto,
        descricao: descricao,
        objetivos: objetivos,
        data_inicio: data_inicio,
        data_final_prevista: data_final_prevista
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Projeto adicionado com sucesso!",
        data: data
    });
}

controllers.projetos_apagar = async (req, res) => {
    const { id_projeto } = req.body;
    const data = await Projetos.destroy({where: { id_projeto: id_projeto }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Projeto apagada com sucesso!",
        data: data
    });
}

controllers.projetos_editar = async (req, res) => {
    const { id_projeto, titulo_projeto, descricao, objetivos, data_inicio, data_final_prevista} = req.body;
    const data = await Projetos.update({
        titulo_projeto: titulo_projeto,
        descricao: descricao,
        objetivos: objetivos,
        data_inicio: data_inicio,
        data_final_prevista: data_final_prevista
    }, {
        where: { id_projeto: id_projeto }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Projeto atualizado com sucesso!",
        data: data
    });
}

controllers.projetos_detalhes = async (req, res) => {
    const { id_projeto } = req.params;
    
    const data = await Projetos.findOne({where: { id_projeto: id_projeto }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;