const Despesas = require('../models/Despesas');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.despesas_adicionar = async(req, res) => {
  const { data_despesa, descricao, valor } = req.body;
  const data = await Despesas.create({
      data: data_despesa,
      descricao: descricao,
      valor: valor,
  })
  .then(function(data) {
      return data
  })
  .catch(error => {
      return error;
  })

  res.status(200).json({
      success: true,
      message: "Despesa adicionada com sucesso!",
      data: data
  });
}

controllers.despesas_lista = async (req, res) => {
    const data = await Despesas.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.despesas_apagar = async (req, res) => {
    const { id_despesa } = req.body;
    const data = await Despesas.destroy({
        where: {
            id_despesa: id_despesa
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.despesas_editar = async (req, res) => {
    const { id_despesa, data_despesa, descricao, valor } = req.body;
    const data = await Despesas.update({
        data: data_despesa,
        descricao: descricao,
        valor: valor,
    }, {
        where: {
            id_despesa: id_despesa
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.despesas_detalhes = async (req, res) => {
    const { id } = req.params;
    const data = await Despesas.findAll({
        where: {
            id_despesa: id
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

module.exports = controllers;