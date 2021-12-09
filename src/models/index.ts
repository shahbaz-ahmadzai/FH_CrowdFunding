import { DataTypes, Sequelize, Op } from 'sequelize';
import Project from './tblProject';
import Fund from './tblfund';
import PledgeLevel from './tblPledgeLevel';

const dbOPtion: any = {
    host: "37.17.229.65",
    dialect: "mysql",
    port: 3306,
    logging: false,

    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
};
let password = "testkennwort";
const user = "admin_nasim";
if (process.argv.includes("--dev")) {
    console.log("local");
    password = "";
    dbOPtion.host = "37.17.229.65";
    dbOPtion.port = 3306;
}
const sequelize = new Sequelize("admin_crowdfund", user, password, dbOPtion);
export const initModels = () => {
    const fund = Fund(sequelize, DataTypes);
    const pledgeLevel = PledgeLevel(sequelize, DataTypes);
    const project = Project(sequelize, DataTypes);
    sequelize.sync();
    fund.belongsTo(pledgeLevel, { foreignKey: "pledgeId" });
    pledgeLevel.hasMany(fund, { foreignKey: "pledgeId" });
    fund.belongsTo(project, { foreignKey: "projectId" });
    project.hasMany(fund, { foreignKey: "projectId" });
    pledgeLevel.belongsTo(project, { foreignKey: "projectId" });
    project.hasMany(pledgeLevel, { foreignKey: "projectId" });
    return {
        fund,
        pledgeLevel,
        project
    }
}