'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('types', [
      {
        name: 'Samsung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nokia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Apple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('types', null, {});
  },
};

