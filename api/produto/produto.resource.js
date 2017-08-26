var express = require('express');
var router = express.Router();
var produtos = require('../produtos/produtos');

router.get('/:id', (req, res, next) => {
    produtos.findByID(req.params.id)
        .then(produto => {
            res.status(200).json(produto);
        });
});

module.exports = router;