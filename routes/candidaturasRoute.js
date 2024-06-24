const express = require('express');

const router = express.Router();

const candidaturasController = require('../controllers/candidaturasController');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join('uploads/cv/'));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('cv'), candidaturasController.upload_file);
router.get('/download', candidaturasController.download_file);

router.post('/update/:id', candidaturasController.candidatura_atualizar);
router.put('/delete', candidaturasController.candidatura_apagar);
router.get('/list/vaga/:id_vaga', candidaturasController.candidatura_detalhes);
router.get('/list/:id_vaga', candidaturasController.candidaturas_lista);

module.exports = router;