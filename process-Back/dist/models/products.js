"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconnection_1 = __importDefault(require("../db/dbconnection"));
const orders_1 = __importDefault(require("./orders"));
const Products = dbconnection_1.default.define('products', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameproduct: {
        type: sequelize_1.DataTypes.STRING,
    },
    ref: {
        type: sequelize_1.DataTypes.STRING,
    },
    amount: {
        type: sequelize_1.DataTypes.STRING,
    },
});
orders_1.default.hasMany(Products, {
    foreignKey: 'orderId',
    sourceKey: 'id'
});
Products.belongsTo(orders_1.default, {
    foreignKey: 'orderId',
    targetKey: 'id'
});
exports.default = Products;
//# sourceMappingURL=products.js.map