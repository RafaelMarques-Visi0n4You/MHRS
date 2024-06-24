const express = require('express');

const router = express.Router();


const {checkToken} = require('../middleware')

const ideiasController = require('../controllers/ideiasController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join('uploads/files/'));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('ficheiroComplementar'), ideiasController.upload_file);
  
router.get('/list', ideiasController.ideias_lista);
router.put('/delete', ideiasController.ideias_apagar);
router.post('/update', ideiasController.ideias_editar);
router.get('/list/:id', ideiasController.ideias_detalhes);

module.exports = router;