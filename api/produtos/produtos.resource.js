var express = require('express');
var router = express.Router();
var produtos = require('./produtos');

router.get('/:categoria', (req, res, next) => {
    produtos.listAllByCategory(req.params.categoria)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/', (req, res, next) => {
    produtos.listAll()
        .then(list => {
            res.status(200).json(list);
        });
});

router.post('/', (req, res, next) => {
    produtos.persist(req.body)
        .then(() => {
            console.log('produto inserido com sucesso');
            res.status(200);
        });
});

router.delete('/:id', (req, res, next) => {
    produtos.remove(req.params.id)
        .then(() => {
            console.log('produto removido com sucesso');
            res.status(200);
        });
});

module.exports = router;