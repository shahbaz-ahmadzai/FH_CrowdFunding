"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const crowdFund_1 = require("./crowdFund");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/crowdFund', crowdFund_1.CrowdFundRouter);
exports.routes = {
    router
};
//# sourceMappingURL=index.js.map