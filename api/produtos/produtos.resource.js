var express = require('express');
var router = express.Router();
var produtos = require('./produtos.sequelize');

// router.get('/:categoria', (req, res, next) => {
//     produtos.listAllByCategory(req.params.categoria)
//         .then(list => {
//             res.status(200).json(list);
//         });
// });

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
        .then(() => {
            console.log('PRODUTO INSERIDO NO ENDPOINT');
            res.status(200);
        })
        .catch(() => {
            res.status(400);
        });
});

router.delete('/:id', (req, res, next) => {
    produtos.remove(req.params.id)
        .then(() => {
            console.log('produto removido com sucesso');
            res.status(200);
        })
        .catch(() => {
            res.status(400);
        });
});

module.exports = router;