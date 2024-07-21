'use strict';

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
              type: Sequelize.INTEGER,
              allowNull: false
            },
            rating: {
              type: Sequelize.INTEGER,
              defaultValue: 0
            },
            img: {
              type: Sequelize.STRING,
              allowNull: false
            },
            type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('devices');
    },
};
