'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nama: 'Administrator',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('admin123', 10),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Diqi',
      email: 'diqi@gmail.com',
      password: bcrypt.hashSync('diqi123', 10),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'Arif',
      email: 'arif@gmail.com',
      password: bcrypt.hashSync('arif123', 10),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
