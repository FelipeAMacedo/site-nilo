var express = require('express');
var router = express.Router();
var produtos = require('./produtos.sequelize');

router.get('/categorias/:categoria', (req, res, next) => {
    produtos.listAllByCategory(req.params.categoria)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/categorias/:categoria/mostrar', (req, res, next) => {
    produtos.listAllByCategoryCanShow(req.params.categoria)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/:id', (req, res, next) => {
    produtos.findById(req.params.id)
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
    if (req.body.id) {
        produtos.update(req.body)
            .then(produto => {
                res.send(produto);
            })
            .catch(() => {
                res.sendStatus(400)
            })
    } else {
        produtos.persist(req.body)
            .then(produto => {
                res.send(produto);
            })
            .catch(() => {
                res.sendStatus(400);
            });
    }
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