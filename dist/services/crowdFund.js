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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalFundByProjectId = exports.getFundDetailsByProjectId = void 0;
const getFundDetailsByProjectId = (Fund, id, attributes) => {
    if (attributes) {
        return Fund.findAll({ where: { projectId: id }, attributes });
    }
    else {
        return Fund.findAll({ where: { projectId: id } });
    }
};
exports.getFundDetailsByProjectId = getFundDetailsByProjectId;
const getTotalFundByProjectId = (Fund, id) => __awaiter(void 0, void 0, void 0, function* () {
    const funds = yield (0, exports.getFundDetailsByProjectId)(Fund, id, ['amount']);
    return funds.reduce((t, { amount }) => t += amount, 0);
});
exports.getTotalFundByProjectId = getTotalFundByProjectId;
//# sourceMappingURL=crowdFund.js.map