var express = require('express');
var router = express.Router();
var produtos = require('./produtos.sequelize');

router.get('/categorias/:categoria', (req, res, next) => {
    produtos.listAllByCategory(req.params.categoria)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/:id', (req, res, next) => {
    produtos.findByID(req.params.id)
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
        .then(produto => {
            res.send(produto);
        })
        .catch(() => {
            res.send().status(400);
        });
});

router.delete('/:id', (req, res, next) => {
    produtos.remove(req.params.id)
        .then(() => {
            res.send().status(200);
        })
        .catch(() => {
            res.send().status(400);
        });
});

module.exports = router;