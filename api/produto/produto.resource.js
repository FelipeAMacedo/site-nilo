var express = require('express');
var router = express.Router();
var produtos = require('../produtos/produtos.sequelize');

router.get('/:id', (req, res, next) => {
    produtos.findById(req.params.id)
        .then(produto => {
            res.status(200).json(produto);
        });
});

module.exports = router;