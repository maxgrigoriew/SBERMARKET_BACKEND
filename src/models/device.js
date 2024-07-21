'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Device = () => {
    const device = sequelize.define('device', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
        price: { type: DataTypes.INTEGER, allowNull: false },
        rating: { type: DataTypes.INTEGER, defaultValue: 0 },
        img: { type: DataTypes.STRING, allowNull: false },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Type",
                key: "id"
            }
        }
    });

    device.associate = function (models) {
        this.belongsTo(models.Type, {
            foreignKey: 'id',
        });
    };

    return device;
};
