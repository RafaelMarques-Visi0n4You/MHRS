const express = require('express');

const router = express.Router();

const feriasController = require('../controllers/feriasController');

router.get('/list', feriasController.ferias_lista);
router.post('/create', feriasController.ferias_adicionar);
router.put('/delete', feriasController.ferias_apagar);
router.post('/update', feriasController.ferias_atualizar);
router.get('/list/:id', feriasController.ferias_detalhes);

module.exports = router;