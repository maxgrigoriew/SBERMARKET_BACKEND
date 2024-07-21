'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Basket = sequelize.define('baskets', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});