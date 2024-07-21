import { sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});