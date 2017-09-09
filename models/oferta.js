module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Oferta", {
        preco: DataTypes.DOUBLE
    }, {
        tableName: 'tb_ofertas'
    });
}