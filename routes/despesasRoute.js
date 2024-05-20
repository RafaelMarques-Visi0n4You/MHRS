const express = require('express');

const router = express.Router();

const despesasController = require('../controllers/despesasController');

router.get('/list', despesasController.despesas_lista);
router.post('/create', despesasController.despesas_adicionar);
router.put('/delete', despesasController.despesas_apagar);
router.post('/update', despesasController.despesas_editar);
router.get('/list/:id', despesasController.despesas_detalhes);

module.exports = router;