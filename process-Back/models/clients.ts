import { DataTypes } from 'sequelize';
import db from '../db/dbconnection';
import Orders from './orders';

const Clients = db.define( 'clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING,
    },
    typedocument: {
        type: DataTypes.STRING,
    },
    document:  {
        type: DataTypes.STRING,
    },
    address:  {
        type: DataTypes.STRING,
    },

})

Clients.hasMany(Orders, {
    foreignKey: 'clientId',
    sourceKey: 'id'
})

Orders.belongsTo(Clients, {
    foreignKey: 'clientId',
    targetKey: 'id'
})

export default Clients ;

