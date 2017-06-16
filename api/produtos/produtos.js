let Sequelize = require('sequelize');
let sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

let Produto = sequelize.define('produto', {
    nome: Sequelize.STRING,
    categoria: Sequelize.STRING,
    marca: Sequelize.STRING,
    quantidade: Sequelize.DOUBLE,
    uMedida: Sequelize.STRING,
    descricao: Sequelize.TEXT
});

let listAll = function() {
    return Produto.findAll({});
}

let findByID = function(id) {
    return Produto.findById(id);
}

let persist = function(produto) {
    Produto.create(produto);
}

let remove = function(id) {
    Produto.destroy();
}

module.exports = {
    listAll,
    findByID,
    persist,
    remove
};