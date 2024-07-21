'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('devices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            price: {
              type: DataTypes.INTEGER,
              allowNull: false
            },
            rating: {
              type: DataTypes.INTEGER,
              defaultValue: 0
            },
            img: {
              type: DataTypes.STRING,
              allowNull: false
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('devices');
    },
};
