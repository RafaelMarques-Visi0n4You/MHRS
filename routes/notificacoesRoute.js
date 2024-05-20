const express = require('express');

const router = express.Router();

const notificacoesController = require('../controllers/notificacoesController');

router.get('/list', notificacoesController.notificacoes_lista);
router.get('/list/:id', notificacoesController.notificacoes_detalhes);
router.post('/create', notificacoesController.notificacoes_adicionar);
router.post('/update', notificacoesController.notificacoes_editar);
router.put('/delete', notificacoesController.notificacoes_apagar);

module.exports = router;