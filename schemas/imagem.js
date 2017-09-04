module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Imagem", {
        path: DataTypes.STRING,
        principal: DataTypes.BOOLEAN,
        banner: DataTypes.BOOLEAN
    }, {
        tableName: 'tb_imagens'
    });
}