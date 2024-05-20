const express = require('express');

const router = express.Router();

const candidaturasController = require('../controllers/candidaturasController');

router.post('/create', candidaturasController.candidatura_adicionar);
router.post('/update/:id', candidaturasController.candidatura_atualizar);
router.put('/delete', candidaturasController.candidatura_apagar);
router.get('/list/:id', candidaturasController.candidatura_detalhes);
router.get('/list', candidaturasController.candidaturas_lista);
module.exports = router;