const express = require('express');

const router = express.Router();

const ideiasController = require('../controllers/ideiasController');

router.get('/list', ideiasController.ideias_lista);
router.post('/create', ideiasController.ideias_adicionar);
router.put('/delete', ideiasController.ideias_apagar);
router.post('/update', ideiasController.ideias_editar);
router.get('/list/:id', ideiasController.ideias_detalhes);

module.exports = router;