module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Imagem", {
        nome: DataTypes.STRING,
        principal: DataTypes.BOOLEAN,
        banner: DataTypes.BOOLEAN,
    }, {
        tableName: 'tb_imagens'
    });
}