module.exports = (sequelize, DataTypes) => {
    var Produto = sequelize.define("Produto", {
        nome: DataTypes.STRING,
        categoria: DataTypes.STRING,
        marca: DataTypes.STRING,
        aPartir: { type: DataTypes.BOOLEAN, field: 'a_partir_de' },
        preco: DataTypes.DOUBLE(9,2),
        descricao: DataTypes.TEXT,
        informacao: DataTypes.TEXT,
        frete: { type: DataTypes.BOOLEAN, defaultValue: false},
        mostrar: { type: DataTypes.BOOLEAN, defaultValue: true}
    }, {
        tableName: 'tb_produtos'
    });

    Produto.associate = function (models) {
        Produto.hasMany(models.Imagem, {
            foreignKey: {
                name: 'produtoId',
                allowNull: false
            }
        });
    }

    return Produto;
}