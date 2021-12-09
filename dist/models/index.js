"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = void 0;
const sequelize_1 = require("sequelize");
const tblProject_1 = __importDefault(require("./tblProject"));
const tblfund_1 = __importDefault(require("./tblfund"));
const tblPledgeLevel_1 = __importDefault(require("./tblPledgeLevel"));
const dbOPtion = {
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
const sequelize = new sequelize_1.Sequelize("admin_crowdfund", user, password, dbOPtion);
const initModels = () => {
    const fund = (0, tblfund_1.default)(sequelize, sequelize_1.DataTypes);
    const pledgeLevel = (0, tblPledgeLevel_1.default)(sequelize, sequelize_1.DataTypes);
    const project = (0, tblProject_1.default)(sequelize, sequelize_1.DataTypes);
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
    };
};
exports.initModels = initModels;
//# sourceMappingURL=index.js.map