var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Imagem = sequelize.import("../../schemas/imagem");

let findById = function(id) {
    return Imagem.findById(id);
}

let findByProdutoId = function(produtoId) {
    return Imagem.findAll({
        where: {
            produtoId: produtoId
        }
    });
}

let findAllBanners = function() {
    return Imagem.findAll({
        where: {
            banner: 1
        }
    });
}

let findMain = function(produtoId) {
    return Imagem.findOne({
        where: {
            ProdutoId: produtoId,
            principal: 1
        }
    });
}

let insert = function(imagem) {
    return Imagem.create(imagem);
}

module.exports = {
    findById,
    findByProdutoId,
    findAllBanners,
    findMain,
    insert
}

