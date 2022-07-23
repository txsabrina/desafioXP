'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [
        {
          codAsset: 1,
          name: 'META',
          qttAssets: 300,
          value: 34,
        },
        {
          codAsset: 2,
          name: 'VALE',
          qttAssets: 500,
          value: 29,
        },
        {
          codAsset: 3,
          name: 'AMBEV',
          qttAssets: 500,
          value: 14,
        },
        {
          codAsset: 4,
          name: 'BB',
          qttAssets: 700,
          value: 34,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  },
};