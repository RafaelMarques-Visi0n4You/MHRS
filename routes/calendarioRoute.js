const express = require('express');

const router = express.Router();

const calendarioController = require('../controllers/calendarioController');

router.get('/list', calendarioController.eventos_lista);

module.exports = router;