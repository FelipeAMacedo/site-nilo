var express = require('express');
var router = express.Router();
var produtos = require('./produtos');

router.get('/',(req, res, next) => {
    produtos.listAll()
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/:id', (req, res, next) => {
    produtos.findByID(req.params.id)
        .then(produto => {
            res.status(200).json(produto);
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