const express = require('express');

const router = express.Router();

const projetosController = require('../controllers/projetosController');

router.get('/list', projetosController.projetos_lista);
router.get('/list/:id', projetosController.projetos_detalhes);
router.post('/create', projetosController.projetos_adicionar);
router.post('/update', projetosController.projetos_editar);
router.put('/delete', projetosController.projetos_apagar);

module.exports = router;