export default function (sequelize, DataTypes) {
    return sequelize.define('tbl_project', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        target: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        start_Date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_Date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'tbl_project',
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
        ]
    });
};
