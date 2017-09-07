var express = require('express');
var router = express.Router();
var imagem = require('./imagem.sequelize');
var sharp = require('sharp');
var multer = require('multer');
var imagesFolder = multer({dest: './images/'});

router.get('/:id', (req, res) => {
    imagem.findAll(req.params.id)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/:id/principal', (req, res) => {
    imagem.findMain(req.params.id)
        .then(list => {
            res.status(200).json(list);
        });
});

router.post('/', imagesFolder.single('selectFile'), (req, res, next) => {

    let fileInfo = JSON.parse(req.body.fileInfo);
    fileInfo.nome = req.file.filename;
    imagem.insert(fileInfo)
        .then(imagem => {
            res.status(200).json(imagem);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.delete('/:id', (req, res, next) => {
    imagem.remove(req.params.id)
        .then(() => {
            console.log('produto removido com sucesso');
            res.sendStatus(200);
        });
});

module.exports = router;