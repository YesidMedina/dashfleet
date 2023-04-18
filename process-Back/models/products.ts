import { DataTypes } from 'sequelize';
import db from '../db/dbconnection';
import Orders from './orders';

const Products = db.define( 'products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nameproduct: {
        type: DataTypes.STRING,
    },
    ref: {
        type: DataTypes.STRING,
    },
    amount:  {
        type: DataTypes.STRING,
    },
})

Orders.hasMany(Products, {
    foreignKey: 'orderId',
    sourceKey: 'id'
})

Products.belongsTo(Orders, {
    foreignKey: 'orderId',
    targetKey: 'id'
})

export default Products ;
