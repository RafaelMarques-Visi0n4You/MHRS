const express = require('express');

const router = express.Router();

const vagaController = require('../controllers/vagaController');

router.get('/list', vagaController.vaga_lista);
router.get('/list/:id_vaga', vagaController.vaga_detalhes);
router.post('/create', vagaController.vaga_adicionar);
router.put('/delete', vagaController.vaga_apagar);
router.post('/update', vagaController.vaga_atualizar);

module.exports = router;