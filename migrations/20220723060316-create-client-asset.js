'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ClientAssets', {
      codAsset: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Assets',
          key: 'codAsset'
        }
      },
      codClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'codClient'
        }
      },
      qttAssets: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('ClientAssets');
  }
};
