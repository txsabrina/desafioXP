

'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ClientAssets',
      [
        {
          codClient: 2,
          codAsset: 1,
          qttAssets: 150,
        },
        {
          codClient: 4,
          codAsset: 2,
          qttAssets: 100,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ClientAssets', null, {});
  },
};

