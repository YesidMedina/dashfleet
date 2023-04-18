import { DataTypes } from 'sequelize';
import db from '../db/dbconnection';

const Orders = db.define( 'orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    ordercode: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    date:  {
        type: DataTypes.DATE,
    },
})

export default Orders ;
