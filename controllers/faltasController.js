const Faltas = require('../models/Faltas');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.falta_lista = async (req, res) => {
    const data = await Faltas.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.falta_adicionar = async (req, res) => {
    const { id_user, data_falta, motivo} = req.body;
    const data = await Faltas.create({
        id_user: id_user,
        data_falta: data_falta,
        motivo: motivo
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Falta adicionada com sucesso!",
        data: data
    });
}

controllers.falta_apagar = async (req, res) => {
    const { id_falta } = req.body;
    const data = await Faltas.destroy({where: { id_falta: id_falta }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Falta apagada com sucesso!",
        data: data
    });
}

controllers.falta_atualizar = async (req, res) => {
    const { id_falta, id_user, data_falta, motivo} = req.body;
    const data = await Faltas.update({
        id_user: id_user,
        data_falta: data_falta,
        motivo: motivo
    }, {where: { id_falta: id_falta }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Falta atualizada com sucesso!",
        data: data
    });
}

controllers.falta_detalhes = async (req, res) => {
    const { id_falta } = req.params;
    const data = await Faltas.findAll({where: { id_falta: id_falta }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;