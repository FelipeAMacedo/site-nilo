module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Produto", {
        nome: DataTypes.STRING,
        categoria: DataTypes.STRING,
        marca: DataTypes.STRING,
        preco: DataTypes.DOUBLE,
        descricao: DataTypes.TEXT,
        mostrar: { type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        tableName: 'tb_produtos'
    });
}