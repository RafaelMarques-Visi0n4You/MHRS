const express = require('express');

const router = express.Router();

const noticiaController = require('../controllers/noticiaController');

router.get('/list', noticiaController.noticias_lista);
router.post('/create', noticiaController.noticias_adicionar);
router.put('/delete', noticiaController.noticias_eliminar);
router.put('/update', noticiaController.noticias_editar);
router.get('/list/:id', noticiaController.noticias_detalhes);

module.exports = router;