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
exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = void 0;
const orders_1 = __importDefault(require("../models/orders"));
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orders_1.default.findAll();
        res.json(orders);
    }
    catch (error) {
        res.json('Error server');
    }
});
exports.getOrders = getOrders;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const order = yield orders_1.default.findByPk(id);
    if (!order) {
        res.status(204).json({
            msg: 'ID not found'
        });
    }
    res.json(order);
});
exports.getOrder = getOrder;
const postOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const order = yield orders_1.default.create(body);
    const save = yield order.save();
    res.json(save);
});
exports.postOrder = postOrder;
const putOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const order = yield orders_1.default.findByPk(id);
        if (!order) {
            res.status(404).json({
                msg: 'ID not found'
            });
        }
        yield (order === null || order === void 0 ? void 0 : order.update(body));
        res.json(order);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Not found'
        });
    }
});
exports.putOrder = putOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const order = yield orders_1.default.findByPk(id);
        if (!order) {
            return res.status(404).json({
                msg: 'ID not found'
            });
        }
        /*  await order.update( { status: 0 } ); */
        res.json(order);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'need administrator permission'
        });
    }
});
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=orders.js.map