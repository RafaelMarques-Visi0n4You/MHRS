const Blog = require('../models/Blog');
var sequelize = require('../models/database');

const controllers = {};

sequelize.sync();

controllers.publicacoes_lista = async (req, res) => {
    const data = await Blog.findAll()
    .then(function(data) {
        return data;
    })
    .catch(error => {
        return error;
    });
    res.json({success: true, data: data});
}


module.exports = controllers;