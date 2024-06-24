const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/login', userController.login_colaborador);
router.get('/registo', userController.registo_colaborador);
router.get('/perfil', userController.perfil_colaborador);
router.post('/editar_perfil', userController.editar_perfil_colaborador);
router.put('/eliminar_perfil', userController.apagar_perfil_colaborador);
router.get('/listar', userController.listar_colaboradores);

module.exports = router;