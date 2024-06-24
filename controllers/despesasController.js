const Despesas = require('../models/Despesas');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.despesas_adicionar = async (req, res) => {
    const { id_user, data_despesa, descricao, valor, projetoAssociado} = req.body;

    try {
        const data = await Despesas.create({
            id_user : id_user,
            data : data_despesa,
            descricao : descricao,
            valor : valor,
            projetoAssociado : projetoAssociado,
            estado: "Pendente",
        });
        res.status(201).json({
            success: true,
            message: "Despesa adicionada com sucesso!",
            data
        });
    } catch (error) {
        console.error("Error adding despesa:", error);
        res.status(500).json({

            success: false,
            message: "Erro ao adicionar despesa.",
            error: error.message
        });
    }
}

controllers.despesas_lista_user = async (req, res) => {
    const userId = req.query.userId;

  try {
    const despesas = await Despesas.findAll({ where: { id_user: userId } });

    res.json({ success: true, data: despesas });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

controllers.despesas_lista = async (req, res) => {
    const { id_user } = req.body;
    try {
        const data = await Despesas.findAll({
            where: {
                id_user
            }
        });
        res.json({ success: true, data });
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({
            success: false,
            message: "Erro ao mostrar despesas.",
            error: error.message
        });
    }
}

controllers.despesas_apagar = async (req, res) => {
    const { id_despesa } = req.body;
    
    try {
        const data = await Despesas.destroy({
            where: {
                id_despesa
            }
        });
        if (data === 0) {
            return res.status(404).json({ success: false, message: "Despesa não encontrada." });
        }
        res.json({ success: true, message: "Despesa apagada com sucesso." });
    } catch (error) {
        console.error("Error deleting despesa:", error);
        res.status(500).json({
            success: false,
            message: "Erro ao apagar despesa.",
            error: error.message
        });
    }
}

controllers.despesas_editar = async (req, res) => {
    const { id_despesa, data_despesa, descricao, valor } = req.body;

    try {
        const data = await Despesas.update({
            data_despesa,
            descricao,
            valor,
        }, {
            where: {
                id_despesa
            }
        });
        if (data[0] === 0) {
            return res.status(404).json({ success: false, message: "Despesa não encontrada." });
        }
        res.json({ success: true, message: "Despesa atualizada com sucesso." });
    } catch (error) {
        console.error("Error updating despesa:", error);
        res.status(500).json({
            success: false,
            message: "Erro ao atualizar despesa.",
            error: error.message
        });
    }
}

controllers.despesas_detalhes = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Despesas.findOne({
            where: {
                id_despesa: id
            }
        });
        if (!data) {
            return res.status(404).json({ success: false, message: "Despesa não encontrada." });
        }
        res.json({ success: true, data });
    } catch (error) {
        console.error("Error fetching despesa details:", error);
        res.status(500).json({
            success: false,
            message: "Erro ao mostrar detalhes da despesa.",
            error: error.message
        });
    }
}

module.exports = controllers;
