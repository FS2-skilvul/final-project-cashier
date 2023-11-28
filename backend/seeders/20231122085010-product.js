'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      user_id: 2,
      kode_barang: 'KKAKCL',
      nama: 'Kopi Kapal Api',
      harga_beli: 2300,
      harga_jual: 3000,
      stok: 20
    },
    {
      user_id: 3,
      kode_barang: 'AQB600',
      nama: 'Aqua Botol 600ml',
      harga_beli: 2400,
      harga_jual: 3000,
      stok: 50
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
