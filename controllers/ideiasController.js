const Ideias = require('../models/Ideia');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.upload_file = async (req, res) => {
    const { id_user, titulo_ideia, descricao } = req.body;
    const ficheiro_complementar = req.file ? req.file.path : null;

    try {
        const data = await Ideias.create({
            id_user: id_user,
            titulo_ideia: titulo_ideia,
            descricao: descricao,
            ficheiro_complementar: ficheiro_complementar,
            data_criacao: new Date(),
            estado: 'Pendente'
        })
            .then(function (data) {
                return data;
            })
            .catch(error => {
                return error;
            });
        res.json({ success: true, data: data });
    } catch (error) {
        console.log(error);
    }
};
    

controllers.ideias_lista = async (req, res) => {
    const userId = req.query.userId;

  try {
    const ideias = await Ideias.findAll({ where: { id_user: userId } });

    res.json({ success: true, data: ideias });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

controllers.ideias_apagar = async (req, res) => {
    const { id_ideia } = req.body;
    const data = await Ideias.destroy({
        where: {
            id_ideia: id_ideia
        }
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
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
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

controllers.ideias_detalhes = async (req, res) => {
    const { id_ideia } = req.params;
    const data = await Ideias.findAll({
        where: {
            id_ideia: id_ideia
        }
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}


module.exports = controllers;