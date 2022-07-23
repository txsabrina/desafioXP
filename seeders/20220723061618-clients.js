'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [
        {
          codClient: 1,
          name: 'Valentina Cruz',
          email: 'valcruz@gmail.com',
          password: '12345678',
          balance: 15000,
        },
        {
          codClient: 2,
          name: 'Mario Junior',
          email: 'mariojr@gmail.com',
          password: '87654321',
          balance: 5000,
        },
        {
          codClient: 3,
          name: 'Maria Teixeira',
          email: 'teixeiramaria@gmail.com',
          password: '24681012',
          balance: 10000,
        },
        {
          codClient: 4,
          name: 'Oliver Neves',
          email: 'oliverneves@gmail.com',
          password: '135791113',
          balance: 20000,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
