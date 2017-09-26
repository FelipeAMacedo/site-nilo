var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Imagem = require("../../models").Imagem;

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
            posicao: 20
        }
    });
}

let findMain = function(produtoId) {
    return Imagem.findOne({
        where: {
            produtoId: produtoId,
            posicao: 1
        }
    });
}

let findByProdutoPosition = function(pId, pos) {
    return Imagem.findOne({
        where : {
            produtoId: pId,
            posicao: pos
        }
    });
}

let insert = function(imagem) {
    return Imagem.create(imagem);
}

let remove = function (id) {
    return Imagem.destroy({
        where: {id: id}
    });
}

module.exports = {
    findById,
    findByProdutoId,
    findAllBanners,
    findMain,
    findByProdutoIdPosition,
    insert,
    remove
}

