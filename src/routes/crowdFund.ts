import { setFundForProject, getAvailableFundByPledge } from './../controllers/crowdFund';
import { middleFunctionCall } from './../services/middleware';
import {
    getDetails, getNumberofsponsors, getTotalgrant, getAvailablepledges,
    getListfunds, getAvailablefundingoptions
} from '../controllers/crowdFund';
import express from 'express';
const router = express.Router();

router.route('/details/:id')
    .get((req, res) => middleFunctionCall(getDetails, req, res));
router.route('/NumerOfSponsors/:id')
    .get((req, res) => middleFunctionCall(getNumberofsponsors, req, res));
router.route('/getTotalGrant/:id')
    .get((req, res) => middleFunctionCall(getTotalgrant, req, res));
router.route('/availablePledges/:id')
    .get((req, res) => middleFunctionCall(getAvailablepledges, req, res));
router.route('/availableFundByPledge/:id')
    .get((req, res) => middleFunctionCall(getAvailableFundByPledge, req, res));
router.route('/ListFunds/:id')
    .get((req, res) => middleFunctionCall(getListfunds, req, res));
router.route('/FundingOptions/:id')
    .get((req, res) => middleFunctionCall(getAvailablefundingoptions, req, res));
router.route('/fund/:projectId/:pledgeId')
    .post((req, res) => middleFunctionCall(setFundForProject, req, res));

export const CrowdFundRouter = router;