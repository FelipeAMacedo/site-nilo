var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

var produtos = require('./api/produtos/produtos.resource');
var contato = require('./api/contato/contato.resource');
var produto = require('./api/produto/produto.resource');
var oferta = require('./api/oferta/oferta.resource');
var imagem = require('./api/imagem/imagem.resource');

app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Parse application/json
app.use(bodyParser.json());

app.use('/api/produtos', produtos);
app.use('/api/contato', contato);
app.use('/api/oferta', oferta);
app.use('/api/imagem', imagem);
app.use('/api/produtos/pedra/', produto)

app.get('/', (req, res, next) => {
    app.use(express.static(path.join(__dirname, 'client/dist')));
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const Produto = sequelize.import(__dirname + "/schemas/produto");
const Oferta = sequelize.import(__dirname + "/schemas/oferta");
const Imagem = sequelize.import(__dirname + "/schemas/imagem");

Produto.hasOne(Oferta);
Oferta.belongsTo(Produto);
Produto.hasMany(Imagem, { as: 'Imagens' });

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}).catch(err => {
    throw err;
});
