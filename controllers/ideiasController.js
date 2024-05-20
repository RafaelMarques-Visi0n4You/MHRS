const Ideias = require('../models/Ideia');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.ideias_adicionar = async(req, res) => {
  const { titulo, descricao, ficheiro } = req.body;
  const data = await Ideias.create({
      titulo_ideia: titulo,
      descricao: descricao,
      ficheiro_complementar: ficheiro,
  })
  .then(function(data) {
      return data
  })
  .catch(error => {
      return error;
  })

  res.status(200).json({
      success: true,
      message: "Ideia adicionada com sucesso!",
      data: data
  });
}

controllers.ideias_lista = async (req, res) => {
    const data = await Ideias.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}

controllers.ideias_apagar = async (req, res) => {
    const { id_ideia } = req.body;
    const data = await Ideias.destroy({
        where: {
            id_ideia: id_ideia
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

controllers.ideias_editar = async (req, res) => {
    const { id_ideia, titulo, descricao, ficheiro } = req.body;
    const data = await Ideias.update({
        titulo_ideia: titulo,
        descricao: descricao,
        ficheiro_complementar: ficheiro,
    }, {
        where: {
            id_ideia: id_ideia
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

controllers.ideias_detalhes = async (req, res) => {
    const { id_ideia } = req.params;
    const data = await Ideias.findAll({
        where: {
            id_ideia: id_ideia
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