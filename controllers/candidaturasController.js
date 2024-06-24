const { stat } = require('fs');
const Candidaturas = require('../models/Candidaturas');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.upload_file = async (req, res) => {
    const { id_vaga, id_user, email } = req.body;
    const curriculo = req.file ? req.file.path : null;

    try {

        if (!id_vaga || !id_user || !curriculo) {
            return res.status(400).json({ success: false, message: "Faltam dados necessários!" });
        }


        const data = await Candidaturas.create({
            id_vaga: id_vaga,
            id_user: id_user,
            curriculo: curriculo,
            status: "Pendente",
            data_submissao: new Date(),
            informacoes_contacto: email
        });

        return res.status(201).json({ success: true, message: "Candidatura Submetida com Sucesso!", data: data });
    } catch (error) {
        console.error('Erro ao criar candidatura:', error);
        return res.status(500).json({ success: false, message: "Erro ao submeter ficheiro.", error: error.message });
    }
};


controllers.download_file = async (req, res) => {
    const { id } = req.params;
    const data = await Candidaturas.findOne({where: { id_candidatura: id }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    if (!data) {
        return res.status(404).json({success: false, message: "Ficheiro não encontrado!"});
    }
    const file = data.curriculo;
    return res.download(file);


    res.json({success: true, message: "Ficheiro descarregado com sucesso!"});
}



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
    const data = await Candidaturas.findOne({where: { id_candidatura: id }})
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;