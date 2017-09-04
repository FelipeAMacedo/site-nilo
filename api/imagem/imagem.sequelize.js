var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Imagem = sequelize.import("../../schemas/imagem");

let findAll = function(produtoId) {
    return Imagem.findAll({
        where: {
            ProdutoId: produtoId
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

module.exports = {
    findAll,
    findAllBanners,
    findMain
}

