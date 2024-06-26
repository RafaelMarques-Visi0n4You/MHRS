const Ferias = require('../models/Ferias');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.ferias_lista = async (req, res) => {
    const data = await Ferias.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.ferias_adicionar = async (req, res) => {
    const { id_user, data_inicio, data_conclusao} = req.body;
    const data = await Ferias.create({
        id_user: id_user,
        data_inicio: data_inicio,
        data_conclusao: data_conclusao
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Pedido de férias adicionado com sucesso!",
        data: data
    });
}

controllers.ferias_apagar = async (req, res) => {
    const { id_ferias } = req.body;
    const data = await Ferias.destroy({where: { id_ferias: id_ferias }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Pedido de férias apagado com sucesso!",
        data: data
    });
}

controllers.ferias_atualizar = async (req, res) => {
    const { id_ferias, id_user, data_inicio, data_conclusao} = req.body;
    const data = await Ferias.update({
        id_user: id_user,
        data_inicio: data_inicio,
        data_conclusao: data_conclusao
    }, {
        where: { id_ferias: id_ferias }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Pedido de férias atualizado com sucesso!",
        data: data
    });
}

controllers.ferias_detalhes = async (req, res) => {
    const { id_ferias } = req.params;
    const data = await Ferias.findAll({where: { id_ferias: id_ferias }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;