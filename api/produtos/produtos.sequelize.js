var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Produto = sequelize.import("../../schemas/produto");
const Imagem = sequelize.import("../../schemas/imagem");

let listAllByCategory = function(categoria) {
    return Produto.findAll({
        where: {
            categoria: categoria
        }
    });
}

let listAll = function(categoria) {
    return Produto.findAll();
}

let findByID = function(id) {
    return Produto.findById(id);
}

let persist = function(produto) {
    return Produto.create(produto);
}

let remove = function(id) {
    return Produto.destroy({
        where: {id: id}
    });
}

module.exports = {
    listAll,
    listAllByCategory,
    findByID,
    persist,
    remove
};