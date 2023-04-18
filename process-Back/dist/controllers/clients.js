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
exports.deleteClient = exports.putClient = exports.postClient = exports.getOrderDetail = exports.getClients = void 0;
const clients_1 = __importDefault(require("../models/clients"));
const orders_1 = __importDefault(require("../models/orders"));
const products_1 = __importDefault(require("../models/products"));
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield clients_1.default.findAll({ include: [{ model: orders_1.default }] });
        res.json(clients);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error server'
        });
    }
});
exports.getClients = getClients;
const getOrderDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, orderId } = req.params;
    try {
        const client = yield clients_1.default.findByPk(Number(id), {
            include: [
                {
                    model: orders_1.default,
                    where: { id: Number(orderId) },
                    include: [{ model: products_1.default }],
                },
            ],
        });
        res.json(client);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Not found",
        });
    }
});
exports.getOrderDetail = getOrderDetail;
const postClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const client = yield clients_1.default.create(body);
    const save = yield client.save();
    res.json(save);
});
exports.postClient = postClient;
const putClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const client = yield clients_1.default.findByPk(id);
        if (!client) {
            res.status(404).json({
                msg: "ID not found",
            });
        }
        yield (client === null || client === void 0 ? void 0 : client.update(body));
        res.json(client);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Not found",
        });
    }
});
exports.putClient = putClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const client = yield clients_1.default.findByPk(id);
        if (!client) {
            return res.status(404).json({
                msg: 'ID not found'
            });
        }
        /* await client.update( { status: 0 } ); */
        res.json(client);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'need administrator permission'
        });
    }
});
exports.deleteClient = deleteClient;
//# sourceMappingURL=clients.js.map