const Vagas = require('../models/Vaga');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.vaga_lista = async (req, res) => {
    const data = await Vagas.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.vaga_adicionar = async (req, res) => {
    const {descricao, titulo_vaga, requisitos} = req.body;
    const data = await Vagas.create({
        descricao: descricao,
        titulo_vaga: titulo_vaga,
        requisitos: requisitos
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Vaga adicionada com sucesso!",
        data: data
    });
}

controllers.vaga_apagar = async (req, res) => {
    const { id_vaga } = req.body;
    const data = await Vagas.destroy({where: { id_vaga: id_vaga }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Vaga apagada com sucesso!",
        data: data
    });
}

controllers.vaga_atualizar = async (req, res) => {
    const { id_vaga, descricao, titulo_vaga, requisitos} = req.body;
    const data = await Vagas.update({
        descricao: descricao,
        titulo_vaga: titulo_vaga,
        requisitos: requisitos
    }, {
        where: { id_vaga: id_vaga }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Vaga atualizada com sucesso!",
        data: data
    });
}

controllers.vaga_detalhes = async (req, res) => {
    const { id_vaga } = req.params;
    
    const data = await Vagas.findOne({where: { id_vaga: id_vaga }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;