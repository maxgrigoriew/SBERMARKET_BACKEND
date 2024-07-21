'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'John@example.com',
        password: '12345',
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Maik',
        last_name: 'Joseph',
        email: 'Maik@example.com',
        password: '12345',
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Doe',
        last_name: 'Joseph',
        email: 'Doe@example.com',
        password: '12345',
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

