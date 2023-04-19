"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clients_1 = __importDefault(require("../routes/clients"));
const orders_1 = __importDefault(require("../routes/orders"));
const products_1 = __importDefault(require("../routes/products"));
const cors_1 = __importDefault(require("cors"));
const dbconnection_1 = __importDefault(require("../db/dbconnection"));
require("../models/clients");
require("../models/orders");
require("../models/products");
class Server {
    constructor() {
        this.apiPaths = {
            clients: '/api/clients',
            orders: '/api/orders',
            products: '/api/products'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middlewares();
        this.router();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbconnection_1.default.sync({ force: false });
                console.log('Database connected');
            }
            catch (error) {
                throw new Error("Database not found");
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    router() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'https://dashfleet.vercel.app'); // (*)update to match the domain you will make the request from
            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        this.app.use(this.apiPaths.clients, clients_1.default),
            this.app.use(this.apiPaths.orders, orders_1.default),
            this.app.use(this.apiPaths.products, products_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port 3000');
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map