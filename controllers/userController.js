const User = require('../models/User');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.login_colaborador = async(req, res) => {
  const { nome_utilizador, pass} = req.body;
  const data = await User.findOne({
    where: {
    nome_utilizador : nome_utilizador,
    pass : pass,
} 
  })
  .then(function(data) {
      return data
  })
  .catch(error => {
      return error;
  })

  res.status(200).json({
      success: true,
      message: "Login efetuado com sucesso!",
      data: data
  });
}

controllers.registo_colaborador = async(req, res) => {
  const { nome_utilizador, pass, email } = req.body;
  const data = await User.create({
      nome_utilizador: nome_utilizador,
      pass: pass,
      email: email,
  })
  .then(function(data) {
      return data
  })
  .catch(error => {
      return error;
  })

  res.status(200).json({
      success: true,
      message: "Registo efetuado com sucesso!",
      data: data
  });
}

controllers.perfil_colaborador = async (req, res) => {
  const { id_user } = req.body;
  const data = await User.findOne({
      where: {
          id_user: id_user
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

controllers.editar_perfil_colaborador = async (req, res) => {
  const { id_user, nome_utilizador, pass, email } = req.body;
  const data = await User.update({
      nome_utilizador: nome_utilizador,
      pass: pass,
      email: email,
  }, {
      where: {
          id_user: id_user
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

controllers.apagar_perfil_colaborador = async (req, res) => {
  const { id_user } = req.body;
  const data = await User.destroy({
      where: {
          id_user: id_user
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

controllers.listar_colaboradores = async (req, res) => {
  const data = await User.findAll()
  .then(function(data) {
      return data;
  })
  .catch(error => {
      return error;
  });
  res.json({success: true, data: data});
}


module.exports = controllers;