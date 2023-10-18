const { DataTypes } = require("sequelize");

module.exports =  (sequelize) => {
    sequelize.define('users',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        correo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{timestamps: false,}
    ) 
}