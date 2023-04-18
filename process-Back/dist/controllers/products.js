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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const products_1 = __importDefault(require("../models/products"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_1.default.findAll();
        res.json(products);
    }
    catch (error) {
        res.json('Error server');
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_1.default.findByPk(id);
    if (!product) {
        res.status(204).json({
            msg: 'ID not found'
        });
    }
    res.json(product);
});
exports.getProduct = getProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    /*   const productFound = await Products.findOne({
          
      })
      if ( productFound ) {
          return res.status( 301 ).json({
              msg: 'poner texto'
          })
      }
   */
    const product = yield products_1.default.create(body);
    const save = yield product.save();
    res.json(save);
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({
                msg: 'ID not found'
            });
        }
        yield (product === null || product === void 0 ? void 0 : product.update(body));
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Not found'
        });
    }
});
exports.putProduct = putProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            return res.status(404).json({
                msg: 'ID not found'
            });
        }
        /*  await product.update( { status: 0 } ); */
        res.json(product);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'need administrator permission'
        });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map