'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
      firstName: 'John Doe',
      lastName: 'Breccker',
      email: 'john@gmail.com',
      ativo: true,
      cpf: '123.123.123-12',
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ], {});
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
