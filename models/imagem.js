module.exports = (sequelize, DataTypes) => {
    var Imagem = sequelize.define("Imagem", {
        nome: DataTypes.STRING,
        posicao: DataTypes.INTEGER,
        tipo: DataTypes.STRING,
        encoding: DataTypes.STRING
    }, {
        tableName: 'tb_imagens'
    });

    Imagem.associate = function(models) {

        Imagem.belongsTo(models.Produto, {
            onDelete: 'CASCADE',
            foreignKey: {
                name: 'produtoId',
                allowNull: false
            }
        });
    }

    return Imagem;
}