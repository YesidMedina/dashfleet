"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../controllers/clients");
const router = (0, express_1.Router)();
router.get('/', clients_1.getClients);
router.get('/:id/:orderId', clients_1.getOrderDetail);
router.post('/', clients_1.postClient);
router.put('/:id', clients_1.putClient);
router.delete('/:id', clients_1.deleteClient);
exports.default = router;
//# sourceMappingURL=clients.js.map