module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Imagem", {
        nome: DataTypes.STRING,
        principal: DataTypes.BOOLEAN,
        banner: DataTypes.BOOLEAN,
        tipo: DataTypes.STRING,
        encoding: DataTypes.STRING
    }, {
        tableName: 'tb_imagens'
    });
}