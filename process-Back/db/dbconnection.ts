import { Sequelize } from 'sequelize';

const db = new Sequelize('projects', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    //logging: false,
    define: {
        timestamps: false
    }
});

export default db;
