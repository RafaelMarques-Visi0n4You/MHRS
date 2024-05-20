const express = require('express');

const router = express.Router();

const reembolsosController = require('../controllers/reembolsosController');

router.get('/list', reembolsosController.reembolsos_lista);
router.get('/list/:id', reembolsosController.reembolsos_detalhes);
router.post('/create', reembolsosController.reembolsos_adicionar);
router.post('/update', reembolsosController.reembolsos_editar);
router.put('/delete', reembolsosController.reembolsos_apagar);

module.exports = router;