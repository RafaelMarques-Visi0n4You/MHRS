const Reembolsos = require('../models/Reembolsos');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.reembolsos_lista = async (req, res) => {
    const data = await Reembolsos.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.reembolsos_adicionar = async (req, res) => {
    const {data_reembolso, descricao, valor} = req.body;
    const data = await Reembolsos.create({
        data: data_reembolso,
        descricao: descricao,
        valor: valor
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Reembolso adicionado com sucesso!",
        data: data
    });
}

controllers.reembolsos_apagar = async (req, res) => {
    const { id_reembolso } = req.body;
    const data = await Reembolsos.destroy({where: { id_reembolso: id_reembolso }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Reembolso apagada com sucesso!",
        data: data
    });
}

controllers.reembolsos_editar = async (req, res) => {
    const { id_reembolso, data_reembolso, descricao, valor} = req.body;
    const data = await Reembolsos.update({
        data: data_reembolso,
        descricao: descricao,
        valor: valor
    }, {
        where: { id_reembolso: id_reembolso }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Reembolso atualizado com sucesso!",
        data: data
    });
}

controllers.reembolsos_detalhes = async (req, res) => {
    const { id_reembolso } = req.params;
    
    const data = await Reembolsos.findOne({where: { id_reembolso: id_reembolso }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;