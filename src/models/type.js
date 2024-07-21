'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});