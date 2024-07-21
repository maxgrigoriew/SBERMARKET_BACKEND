'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('devices', [
      {
        name: 'Samsung S22',
        price: 65000,
        rating: 9.3,
        img: 'img.jpg',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Iphone 14',
        price: 87000,
        rating: 7.2,
        img: 'img.jpg',
        type_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Samsung A32',
        price: 13000,
        rating: 4.5,
        img: 'img.jpg',
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('devices', null, {});
  },
};

