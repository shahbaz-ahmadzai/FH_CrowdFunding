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
exports.setFundForProject = exports.getAvailablefundingoptions = exports.getListfunds = exports.getAvailableFundByPledge = exports.getAvailablepledges = exports.getTotalgrant = exports.getNumberofsponsors = exports.getDetails = void 0;
const crowdFund_1 = require("./../services/crowdFund");
const models_1 = require("../models");
const constant_1 = require("../utils/constant");
const db = (0, models_1.initModels)();
const Project = db.project;
const Fund = db.fund;
const PledgeLevel = db.pledgeLevel;
const getDetails = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const projectDetails = yield Project.findByPk(request.params.id);
    const { target, end_Date } = projectDetails;
    delete projectDetails.dataValues.start_Date;
    delete projectDetails.dataValues.end_Date;
    const date1 = new Date();
    const date2 = new Date(end_Date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalFund = yield (0, crowdFund_1.getTotalFundByProjectId)(Fund, request.params.id);
    const percentage = (totalFund / target) * 100;
    const status = percentage < 50 ? constant_1.STATUS.a : percentage >= 50 && percentage < 100 ? constant_1.STATUS.b : constant_1.STATUS.c;
    return Object.assign(Object.assign({}, projectDetails.dataValues), { status, remainingTime: diffDays });
});
exports.getDetails = getDetails;
const getNumberofsponsors = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const totalSponsors = yield Fund.count({ where: { projectId: request.params.id } });
    return { totalSponsors };
});
exports.getNumberofsponsors = getNumberofsponsors;
const getTotalgrant = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const totalFund = yield (0, crowdFund_1.getTotalFundByProjectId)(Fund, request.params.id);
    return { totalFund };
});
exports.getTotalgrant = getTotalgrant;
const getAvailablepledges = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield PledgeLevel.findAll({ where: { projectId: request.params.id } });
});
exports.getAvailablepledges = getAvailablepledges;
const getAvailableFundByPledge = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Fund.findAll({ where: { pledgeId: request.params.id } });
});
exports.getAvailableFundByPledge = getAvailableFundByPledge;
const getListfunds = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, crowdFund_1.getFundDetailsByProjectId)(Fund, request.params.id);
});
exports.getListfunds = getListfunds;
const getAvailablefundingoptions = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return yield PledgeLevel.findAll({ where: { projectId: request.params.id }, attributes: ['id', 'name'] });
});
exports.getAvailablefundingoptions = getAvailablefundingoptions;
const setFundForProject = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = yield PledgeLevel.findByPk(request.params.pledgeId);
    yield PledgeLevel.update({ amount: amount + request.body.amount }, { where: { id: request.params.pledgeId } });
    return yield Fund.create({ amount: request.body.amount, pledgeId: request.params.pledgeId, projectId: request.params.projectId });
});
exports.setFundForProject = setFundForProject;
//# sourceMappingURL=crowdFund.js.map