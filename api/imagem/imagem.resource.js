var express = require('express');
var router = express.Router();
var imagem = require('./imagem.sequelize');
var sharp = require('sharp');
var multer = require('multer');
var imagesFolder = multer({dest: './images/'});
var fs = require('fs');

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

router.get('/produto/:id/', (req, res) => {
    imagem.findByProdutoId(req.params.id)
        .then(list => {
            res.status(200).json(list);
        });
});

router.get('/image/:name', (req, res) => {
    fs.readFile('./images/' + req.params.name, function(err, data) {
        if (err) throw err;

        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        var buf = new Buffer(data, '7bit').toString('base64');
        res.end(buf);
    });
});

router.post('/', imagesFolder.single('selectFile'), (req, res, next) => {

    let fileInfo = JSON.parse(req.body.fileInfo);
    fileInfo.nome = req.file.filename;
    fileInfo.tipo = req.file.mimetype;
    fileInfo.encoding = req.file.encoding;


    console.log('PRODUTO ID: ');
    console.log(fileInfo.produtoId);
    // let fileInfo = {
    //     nome: "",
    //     principal: 1,
    //     banner: 0,
    //     tipo: "image/jpg",
    //     encoding: "7bit",
    //     produtoId: 1
    // };

    // console.log('FILE INFO' + fileInfo);
    // console.log('Produto ID' + fileInfo.produtoId);
    // console.log('Produto ID from request' + req.body.fileInfo.produtoId);
    // console.log('REQ.BODY.FILEINFO' + req.body.fileInfo);


    imagem.insert(fileInfo)
        .then(arquivo => {

            imagem.findById(1).then(resultado => {

                console.log('ESSE É O RESULTADO DA BUSCA; ');
                console.log(resultado);
                res.status(200).json(resultado);
            })

        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.delete('/:id', (req, res, next) => {
    imagem.remove(req.params.id)
        .then(() => {
            console.log('produto removido com sucesso');
            res.sendStatus(200);
        });
});

module.exports = router;