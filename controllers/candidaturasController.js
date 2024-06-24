const { where } = require('sequelize');
const Candidaturas = require('../models/Candidaturas');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.candidaturas_lista = async (req, res) => {
    const data = await Candidaturas.findAll({where:{id_vaga: req.params.id_vaga}})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.candidatura_adicionar = async (req, res) => {
    const { id_vaga, id_user, data_submissao, estado} = req.body;
    const data = await Candidaturas.create({
        id_vaga: id_vaga,
        id_user: id_user,
        data_submissao: data_submissao,
        estado: estado
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Candidatura adicionada com sucesso!",
        data: data
    });
}

controllers.candidatura_apagar = async (req, res) => {
    const { id_candidatura } = req.body;
    const data = await Candidaturas.destroy({where: { id_candidatura: id_candidatura }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Candidatura apagada com sucesso!",
        data: data
    });
}

controllers.candidatura_atualizar = async (req, res) => {
    const { id_candidatura, id_vaga, id_user, data_submissao, estado} = req.body;
    const data = await Candidaturas.update({
        id_vaga: id_vaga,
        id_user: id_user,
        data_submissao: data_submissao,
        estado: estado
    }, {
        where: { id_candidatura: id_candidatura }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Candidatura atualizada com sucesso!",
        data: data
    });
}    

controllers.candidatura_detalhes = async (req, res) => {
    const { id } = req.params;
    const data = await Candidaturas.findAll({where: { id_candidatura: id }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;