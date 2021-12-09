"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    return sequelize.define('tbl_fund', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pledgeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'tbl_fund',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "pledgeId",
                using: "BTREE",
                fields: [
                    { name: "pledgeId" },
                ]
            },
            {
                name: "projectId",
                using: "BTREE",
                fields: [
                    { name: "projectId" },
                ]
            },
        ]
    });
}
exports.default = default_1;
;
//# sourceMappingURL=tblfund.js.map