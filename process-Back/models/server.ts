import express, { Application } from 'express';
import clientsRoutes from '../routes/clients';
import ordersRoutes from '../routes/orders';
import productsRoutes from '../routes/products';
import cors from 'cors';
import db from '../db/dbconnection';
/* import '../models/clients';
import '../models/orders';
import '../models/products';
 */

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        clients: '/api/clients',
        orders: '/api/orders',
        products: '/api/products'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.dbConnection();
        this.middlewares();
        this.router();

    }

    async dbConnection() {
        
        try {
            await db.authenticate();
            console.log('Database connected');           
            
        } catch (error) {
            throw new Error("Database not found");
            
        }
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ));
    }

    router() {
        this.app.use( this.apiPaths.clients, clientsRoutes),
        this.app.use( this.apiPaths.orders, ordersRoutes),
        this.app.use( this.apiPaths.products, productsRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Server on port 3000' );
            
        })
    }
}

export default Server;


