"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconnection_1 = __importDefault(require("../db/dbconnection"));
const orders_1 = __importDefault(require("./orders"));
const Clients = dbconnection_1.default.define('clients', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    typedocument: {
        type: sequelize_1.DataTypes.STRING,
    },
    document: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
});
Clients.hasMany(orders_1.default, {
    foreignKey: 'clientId',
    sourceKey: 'id'
});
orders_1.default.belongsTo(Clients, {
    foreignKey: 'clientId',
    targetKey: 'id'
});
exports.default = Clients;
//# sourceMappingURL=clients.js.map