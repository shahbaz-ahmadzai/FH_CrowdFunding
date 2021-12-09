import { CrowdFundRouter } from './crowdFund';
import express from 'express';
const router = express.Router();

router.use('/crowdFund', CrowdFundRouter);

export const routes = {
    router
};