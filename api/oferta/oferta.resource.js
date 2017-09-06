var express = require('express');
var router = express.Router();
var oferta = require('./oferta.sequelize');

router.get('/:qtd', (req, res, next) => {
    oferta.listLast(req.params.qtd)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/', (req, res, next) => {
    oferta.listLast(4)
        .then(list => {
            res.status(200).json(list);
        });
});

router.post('/', (req, res, next) => {
    oferta.persist(req.body)
        .then(() => {
            res.status(200);
        });
});

router.delete('/:id', (req, res, next) => {
    oferta.remove(req.params.id)
        .then(() => {
            console.log('produto removido com sucesso');
            res.status(200);
        });
});

module.exports = router;