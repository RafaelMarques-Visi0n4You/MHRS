const Faltas = require('../models/Faltas');
const Ferias = require('../models/Ferias');

var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.eventos_lista = async (req, res) => {
    try {
        const faltas = await Faltas.findAll();
        const ferias = await Ferias.findAll();
        res.json({ faltas, ferias });
    } catch (error) {
        console.error("Erro ao buscar dados das tabelas:", error);
        res.status(500).json({ error: "Erro ao buscar dados das tabelas" });
    }
}

module.exports = controllers;