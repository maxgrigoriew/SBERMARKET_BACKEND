'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const BasketDevice = sequelize.define('basket_devices', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});