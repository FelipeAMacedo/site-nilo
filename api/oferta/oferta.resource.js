var express = require('express');
var router = express.Router();
var oferta = require('./oferta.sequelize');

router.get('/:qtd', (req, res, next) => {
    console.log('AQUI É A LISTA!!!!!!!!');    
    oferta.listLast(req.params.qtd)
        .then(list => {
            console.log('AQUI É A LISTA!!!!!!!!');
            console.log(list);
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
            console.log('produto inserido com sucesso');
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