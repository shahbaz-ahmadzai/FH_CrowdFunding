export const getFundDetailsByProjectId = (Fund, id, attributes?: any) => {
    if (attributes) {
        return Fund.findAll({ where: { projectId: id }, attributes });
    } else {
        return Fund.findAll({ where: { projectId: id } });
    }
};

export const getTotalFundByProjectId = async (Fund, id) => {
    const funds = await getFundDetailsByProjectId(Fund, id, ['amount']);
    return funds.reduce((t, { amount }) => t += amount, 0)
}