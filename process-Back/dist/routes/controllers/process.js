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
exports.deleteProcess = exports.putProcess = exports.postProcess = exports.getProcess = exports.getProcesses = void 0;
const process_1 = __importDefault(require("../models/process"));
const getProcesses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const processes = yield process_1.default.findAll();
        res.json(processes);
    }
    catch (error) {
        res.json('Error server');
    }
});
exports.getProcesses = getProcesses;
const getProcess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const process = yield process_1.default.findByPk(id);
    if (!process) {
        res.status(204).json({
            msg: 'ID not found'
        });
    }
    res.json(process);
});
exports.getProcess = getProcess;
const postProcess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const processFound = yield process_1.default.findOne({
        where: {
            url: body.url
        }
    });
    if (processFound) {
        return res.status(301).json({
            msg: 'The Url already exist'
        });
    }
    const process = yield process_1.default.create(body);
    const save = yield process.save();
    res.json(save);
});
exports.postProcess = postProcess;
const putProcess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const process = yield process_1.default.findByPk(id);
        if (!process) {
            res.status(404).json({
                msg: 'ID not found'
            });
        }
        yield (process === null || process === void 0 ? void 0 : process.update(body));
        res.json(process);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Not found'
        });
    }
});
exports.putProcess = putProcess;
const deleteProcess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const process = yield process_1.default.findByPk(id);
        if (!process) {
            return res.status(404).json({
                msg: 'ID not found'
            });
        }
        yield process.update({ status: 0 });
        res.json(process);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'need administrator permission'
        });
    }
});
exports.deleteProcess = deleteProcess;
//# sourceMappingURL=process.js.map