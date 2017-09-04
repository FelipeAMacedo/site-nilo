let Sequelize = require('sequelize');
let sequelize = new Sequelize('mysql://nilodb:lipes2jojo@nilodb.mysql.dbaas.com.br/nilodb');

const Produto = sequelize.define('produto', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    nome: Sequelize.STRING,
    categoria: Sequelize.STRING,
    marca: Sequelize.STRING,
    dataCriado: Sequelize.DATE,
    quantidade: Sequelize.DOUBLE,
    uMedida: Sequelize.STRING,
    descricao: Sequelize.TEXT
});

const Oferta = sequelize.define('oferta', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}
});