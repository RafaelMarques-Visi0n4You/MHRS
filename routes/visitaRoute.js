const express = require('express');

const router = express.Router();

const visitaController = require('../controllers/visitaController');

router.get('/list', visitaController.visitas_lista);
router.get('/list/:id', visitaController.visitas_detalhes);
router.post('/create', visitaController.visitas_adicionar);
router.post('/update', visitaController.visitas_editar);
router.put('/delete', visitaController.visitas_eliminar);

module.exports = router;