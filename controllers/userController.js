const User = require('../models/User');
const sequelize = require('../models/database');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const config = require('../config');

const controllers = {};
sequelize.sync();

controllers.login_colaborador = async (req, res) => {
    const { nome_utilizador, pass } = req.body;

    if (!nome_utilizador || !pass) {
        return res.status(400).json({ success: false, message: 'Nome de utilizador e senha são obrigatórios' });
    }

    try {
        const user = await User.findOne({ where: { nome_utilizador: nome_utilizador } });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Utilizador não encontrado' });
        }

        const isMatch = bcrypt.compare(pass, user.pass).then(function (result) {
            return result;
        });


        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: user.id_user, tipo_user: user.tipo_user }, config.jwtSecret, { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            message: "Autenticação bem-sucedida",
            token: token,
            user: {
                id: user.id_user,
                nome_utilizador: user.nome_utilizador,
                pass: user.pass,
                tipo_user: user.tipo_user,
            }
        });
    } catch (error) {
        console.error("Erro durante a autenticação:", error);
        res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    }
}

controllers.registo_colaborador = async (req, res) => {
    const { nome_utilizador, pass, email, telemovel, data_nascimento, genero } = req.body;

    if (!nome_utilizador || !pass || !email || !telemovel || !data_nascimento || !genero) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios' });
    }

    const user = await User.findOne({ where: { nome_utilizador: nome_utilizador } });
    if (user) {
        return res.status(409).json({ success: false, message: 'Nome de utilizador já em uso' });
    }

    const data = await User.create({
        nome_utilizador: nome_utilizador,
        pass: bcrypt.hashSync(pass, 10),
        email: email,
        telemovel: telemovel,
        data_nascimento: data_nascimento,
        genero: genero,
        tipo_user: "colaborador"
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error);
            return error;
        });

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
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
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
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

controllers.apagar_perfil_colaborador = async (req, res) => {
    const { id_user } = req.body;
    const data = await User.destroy({
        where: {
            id_user: id_user
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

controllers.listar_colaboradores = async (req, res) => {
    const data = await User.findAll()
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}


module.exports = controllers;
