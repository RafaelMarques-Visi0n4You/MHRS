const Notificacoes = require('../models/Notificacoes');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.notificacoes_lista = async (req, res) => {
    const data = await Notificacoes.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.notificacoes_adicionar = async (req, res) => {
    const {mensagem, data_notificacao, estado} = req.body;
    const data = await Notificacoes.create({
        mensagem: mensagem,
        data: data_notificacao,
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
        message: "Notificação adicionada com sucesso!",
        data: data
    });
}

controllers.notificacoes_apagar = async (req, res) => {
    const { id_notificacao } = req.body;
    const data = await Notificacoes.destroy({where: { id_notificacao: id_notificacao }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "VNotificação apagada com sucesso!",
        data: data
    });
}

controllers.notificacoes_editar = async (req, res) => {
    const { id_notificacao, mensagem, data_notificacao, estado} = req.body;
    const data = await Notificacoes.update({
        mensagem: mensagem,
        data: data_notificacao,
        estado: estado
    }, {
        where: { id_notificacao: id_notificacao }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.status(200).json({
        success: true,
        message: "Notificação atualizada com sucesso!",
        data: data
    });
}

controllers.notificacoes_detalhes = async (req, res) => {
    const { id_notificacao } = req.params;
    
    const data = await Notificacoes.findOne({where: { id_notificacao: id_notificacao }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;