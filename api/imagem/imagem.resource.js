var express = require('express');
var router = express.Router();
var imagem = require('./imagem.sequelize');

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


router.post('/', (req, res, next) => {
    imagem.persist(req.body)
        .then(() => {
            console.log('produto inserido com sucesso');
            res.status(200);
        });
});

router.delete('/:id', (req, res, next) => {
    imagem.remove(req.params.id)
        .then(() => {
            console.log('produto removido com sucesso');
            res.status(200);
        });
});

module.exports = router;