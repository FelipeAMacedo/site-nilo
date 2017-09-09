var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Produto = require("../../models").Produto;
const Imagem = require("../../models").Imagem;

let listAllByCategoryCanShow = function (categoria) {
    return Produto.findAll({
        where: {
            categoria: categoria,
            mostrar: 1
        }
    });
}

let listAllByCategory = function (categoria) {
    return Produto.findAll({
        where: {
            categoria: categoria
        }
    });
}

let listAll = function (categoria) {
    return Produto.findAll();
}

let findById = function (id) {
    return Produto.findById(id);
}

let persist = function (produto) {
    return Produto.create(produto);
}

let update = function (novosDados) {
    Produto.findById (novosDados.id)
        .then(produto => {
            return produto.update(novosDados);
                // .then (response => {
                    // for (let img of imagens) {
                    //     Imagem.findById (img.id)
                    //         .then (i => {
                    //             i.update (img)
                    //         })
                    //         .catch(errorImagem => {
                    //             return errorImagem;
                    //         });
                    // }


                    // esquecer esse
                    // Imagem.findAll({
                    //     where: {
                    //         produtoId: novosDados.id
                    //     }
                    // }).then(imagens => {
                        
                    // }).catch(errorImagens => {
                    //     return errorImagens;
                    // });




                //     console.log(response);
                //     return response;
                // })
                // .catch (err => {
                //     return err;
                // }); 
        })
        .catch(error => {
            return error;
        })
}

let remove = function (id) {
    return Produto.destroy({
        where: {id: id}
    });
}

module.exports = {
    listAll,
    listAllByCategoryCanShow,
    listAllByCategory,
    findById,
    persist,
    update,
    remove
};