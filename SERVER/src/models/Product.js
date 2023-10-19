const {DataTypes} =require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("product", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        almacenamiento:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        memoria:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        procesador:{
            type: DataTypes.STRING,
            allowNull: false,   
        },
        resolucion:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{timestamps: false,}
    )
}