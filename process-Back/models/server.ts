import express, { Application } from 'express';
import clientsRoutes from '../routes/clients';
import ordersRoutes from '../routes/orders';
import productsRoutes from '../routes/products';
import cors from 'cors';
import db from '../db/dbconnection';
import '../models/clients';
import '../models/orders';
import '../models/products';


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
            await db.sync({ force: false });
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
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'https://dashfleet.vercel.app'); // (*)update to match the domain you will make the request from
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
          });
    
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


