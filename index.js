var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var port = process.env.PORT || 3000;
var models = require('./models');

var produtos = require('./api/produtos/produtos.resource');
var contato = require('./api/contato/contato.resource');
var produto = require('./api/produto/produto.resource');
var oferta = require('./api/oferta/oferta.resource');
var imagem = require('./api/imagem/imagem.resource');

app.use(cors());

// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

// Parse application/json
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '200mb'}));

app.use('/api/produtos', produtos);
app.use('/api/contato', contato);
app.use('/api/oferta', oferta);
app.use('/api/imagem', imagem);
app.use('/api/produtos/pedra/', produto)

app.get('/', (req, res, next) => {
    // app.use(express.static(path.join(__dirname, 'client/dist')));
    // res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

models.sequelize.sync({
    force: false
}).then(() => {    
    app.listen(port, function() {
        console.log("App is running on port " + port);
    });
}).catch(err => {
    throw err;
});
