'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT
        }
    }, {
		tableName: 'products'
	});

	return Product;
};
