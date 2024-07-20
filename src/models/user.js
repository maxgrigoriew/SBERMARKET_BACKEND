'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const User = sequelize.define('users', {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
});
