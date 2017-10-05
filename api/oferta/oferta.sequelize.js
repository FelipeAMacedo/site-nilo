var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Oferta = sequelize.import("../../models/oferta");
const Produto = require("../../models").Produto;

let listAll = function() {
    return Oferta.findAll();
}

let listLast = function(limitNum) {
    return Oferta.findAll({
        attributes: ['id','preco','createdAt', 'updatedAt', 'produtoId'],
        limit: limitNum,
        order: ['updatedAt', 'DESC'],
    });
}

let findById = function(id) {
    return Produto.findById(id);
}

let persist = function(produto) {
    return Produto.create(produto);
}

let remove = function(id) {
    return Produto.destroy();
}

module.exports = {
    listAll,
    listLast,
    findById,
    persist,
    remove
}