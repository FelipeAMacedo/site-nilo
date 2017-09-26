var express = require('express');
var router = express.Router();
var imagem = require('./imagem.sequelize');
var sharp = require('sharp');
var multer = require('multer');
var FTPStorage = require('multer-ftp')

var stor = new FTPStorage({
    basepath: '/public_html/assets/images/produtos',
    ftp: {
        host: 'ftp.nilomateriaisconstrucao.com.br',
        secure: false,
        user: 'nilomateriaisconstru',
        password: 'lipes2jojo'
    }
});

var imagesFolder = multer({
    storage: stor
});

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
    fileInfo.nome = req.file.path.substring(36, req.file.path.length);
    fileInfo.tipo = req.file.mimetype;
    fileInfo.encoding = req.file.encoding;

    console.log('FILENAME');
    console.log(req.file.path.substring(36, req.file.path.length));

    console.log('FILE');
    console.log(req.file);

    // let fileInfo = {
    //     nome: "",
    //     principal: 1,
    //     banner: 0,
    //     tipo: "image/jpg",
    //     encoding: "7bit",
    //     produtoId: 1
    // };


    imagem.findByProdutoIdPosition(fileInfo.produtoId, fileInfo.posicao)
    .then(imagemResposta => {
        imagem.remove(imagemResposta.id)
        .then(() => {
            imagem.insert(fileInfo)
            .then(arquivo => {
                res.sendStatus(200);
            })
            .catch(errorUpdate => {
                res.status(400).json(errorUpdate);
            });
        });
    })
    .catch(error => {
        imagem.insert(fileInfo)
        .then(arquivo => {
            res.sendStatus(200);
        })
        .catch(errorInsert => {
            res.status(400).json(errorInsert);
        });
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