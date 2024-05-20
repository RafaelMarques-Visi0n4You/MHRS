const express = require('express');

const router = express.Router();

const faltasController = require('../controllers/faltasController');

router.get('/list', faltasController.falta_lista);
router.get('/list/:id', faltasController.falta_detalhes);
router.post('/create', faltasController.falta_adicionar);
router.post('/update', faltasController.falta_atualizar);
router.put('/delete', faltasController.falta_apagar);

module.exports = router;