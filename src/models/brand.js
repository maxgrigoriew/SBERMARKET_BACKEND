'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});