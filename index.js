var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var produtos = require('./api/produtos/produtos.resource');

app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Parse application/json
app.use(bodyParser.json());

app.use('/api/produtos', produtos);

app.get('/', (req, res, next) => {
    app.use(express.static(path.join(__dirname, 'client/dist')));
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});