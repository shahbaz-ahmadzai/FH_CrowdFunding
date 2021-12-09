"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowdFundRouter = void 0;
const crowdFund_1 = require("./../controllers/crowdFund");
const middleware_1 = require("./../services/middleware");
const crowdFund_2 = require("../controllers/crowdFund");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route('/details/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_2.getDetails, req, res));
router.route('/NumerOfSponsors/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_2.getNumberofsponsors, req, res));
router.route('/getTotalGrant/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_2.getTotalgrant, req, res));
router.route('/availablePledges/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_2.getAvailablepledges, req, res));
router.route('/availableFundByPledge/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_1.getAvailableFundByPledge, req, res));
router.route('/ListFunds/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_2.getListfunds, req, res));
router.route('/FundingOptions/:id')
    .get((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_2.getAvailablefundingoptions, req, res));
router.route('/fund/:projectId/:pledgeId')
    .post((req, res) => (0, middleware_1.middleFunctionCall)(crowdFund_1.setFundForProject, req, res));
exports.CrowdFundRouter = router;
//# sourceMappingURL=crowdFund.js.map