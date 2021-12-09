import { getFundDetailsByProjectId, getTotalFundByProjectId } from './../services/crowdFund';
import { initModels } from '../models';
import { STATUS } from '../utils/constant';
const db = initModels();
const Project = db.project;
const Fund = db.fund;
const PledgeLevel = db.pledgeLevel;

export const getDetails = async (request, response) => {
    const projectDetails = await Project.findByPk(request.params.id);
    const { target, end_Date } = projectDetails;
    delete projectDetails.dataValues.start_Date
    delete projectDetails.dataValues.end_Date
    const date1: any = new Date();
    const date2: any = new Date(end_Date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalFund = await getTotalFundByProjectId(Fund, request.params.id);
    const percentage = (totalFund / target) * 100;
    const status = percentage < 50 ? STATUS.a : percentage >= 50 && percentage < 100 ? STATUS.b : STATUS.c;
    return { ...projectDetails.dataValues, status, remainingTime: diffDays };
};
export const getNumberofsponsors = async (request, response) => {
    const totalSponsors = await Fund.count({ where: { projectId: request.params.id } });
    return { totalSponsors };
};
export const getTotalgrant = async (request, response) => {
    const totalFund = await getTotalFundByProjectId(Fund, request.params.id)
    return { totalFund };
};
export const getAvailablepledges = async (request, response) => {
    return await PledgeLevel.findAll({ where: { projectId: request.params.id } });
};
export const getAvailableFundByPledge = async (request, response) => {
    return await Fund.findAll({ where: { pledgeId: request.params.id } });
};
export const getListfunds = async (request, response) => {
    return await getFundDetailsByProjectId(Fund, request.params.id);
};
export const getAvailablefundingoptions = async (request, response) => {
    return await PledgeLevel.findAll({ where: { projectId: request.params.id }, attributes: ['id', 'name'] });
};
export const setFundForProject = async (request, response) => {
    const { amount } = await PledgeLevel.findByPk(request.params.pledgeId);
    await PledgeLevel.update(
        { amount: amount + request.body.amount },
        { where: { id: request.params.pledgeId } }
    )
    return await Fund.create({ amount: request.body.amount, pledgeId: request.params.pledgeId, projectId: request.params.projectId });
};