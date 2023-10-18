const {DataTypes} =require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("product", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        almacenamiento:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        memoria:{
            type: DataTypes.NUMBER,
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