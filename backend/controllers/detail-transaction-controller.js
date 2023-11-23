// const bcrypt = require('bcrypt');
const { Detail_Transaction } = require('../models');
// const Todo = require('../models/Todo');

module.exports = {
    getAllDetailTransaction: async (req, res) => {
        try {
            const roleUser = req.payload.role

            const transactionAdmin = await Detail_Transaction.findAll()

            if (roleUser == 'admin') {
                return res.status(200).json({
                    message: 'Data detail transaksi berhasil didapatkan',
                    data: transactionAdmin
                })
            } else {
                return res.status(404).json({
                    message: 'Data detail transaksi gagal didapatkan',
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Terjadi kesalah server',
                error: error.message
            })
        }
    }
}