// const bcrypt = require('bcrypt');
const { Transaction, Detail_Transaction, Product } = require('../models');
// const Todo = require('../models/Todo');

module.exports = {
    getAllTransaction: async (req, res) => {
        try {
            const userId = req.payload.id
            const roleUser = req.payload.role

            const transactionAdmin = await Transaction.findAll({
                include: [
                    {
                        model: Product,
                        as: 'products',
                    },
                ],
            })
            const transactionUser = await Transaction.findAll({
                where: {
                    user_id: userId
                },
                include: [
                    {
                        model: Product,
                        as: 'products',
                    },
                ],
            })

            if (roleUser == 'admin') {
                return res.status(200).json({
                    message: 'Data transaksi berhasil didapatkan',
                    data: transactionAdmin
                })
            } else if (roleUser == 'user') {
                return res.status(200).json({
                    message: 'Data transaksi berhasil didapatkan',
                    data: transactionUser
                })
            } else {
                return res.status(404).json({
                    message: 'Data transaksi gagal didapatkan',
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Terjadi kesalah server',
                error: error.message
            })
        }

    },

    getTransactionById: async (req, res) => {
        const transactionId = req.params.id
        const userId = req.payload.id

        try {
            // Temukan todo berdasarkan ID dan User ID
            const transaction = await Transaction.findOne({
                where: {
                    id: transactionId,
                    user_id: userId
                },
                include: [
                    {
                        model: Product,
                        as: 'products',
                    },
                ],
            });

            if (!transaction) {
                return res.status(404).json({
                    message: 'Transaksi tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Berhasil mendapatkan transaksi',
                data: transaction
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server',
                error: error.message
            });
        }
    },

    createTransaction: async (req, res) => {
        const userId = req.payload.id; // Ambil ID pengguna dari token
        // let data = req.body
        // data.user_id = userId
        const { products, total_biaya } = req.body
        const createTransaction = {
            total_biaya: total_biaya,
            user_id: userId
        }

        try {
            // Iterasi melalui setiap produk di transaksi untuk mengecek stok cukup atau tidak
            for (const { product_id, qty } of products) {
                // Mengecek ketersediaan stok
                const product = await Product.findByPk(product_id);
                if (!product) {
                    // Produk tidak ditemukan, batalkan transaksi
                    return res.status(404).json({
                        message: `Produk dengan ID ${product_id} tidak ditemukan.`,
                    });
                }

                if (product.stok < qty) {
                    // Stok tidak mencukupi, batalkan transaksi
                    return res.status(400).json({
                        message: `Stok tidak mencukupi untuk produk dengan nama ${product.nama}.`,
                    });
                }
            }

            // input data
            if (products.length > 0 && total_biaya) {
                const transaction = await Transaction.create(createTransaction)
                for (const { product_id, qty, sub_total } of products) {
                    createDetailTransaction = {
                        product_id,
                        transaction_id: transaction.id,
                        qty,
                        sub_total,
                    }
                    await Detail_Transaction.create(createDetailTransaction)

                    // Mengurangi stok dari produk
                    const product = await Product.findByPk(product_id);
                    await product.update({ stok: product.stok - qty });
                }

                // send response
                res.status(201).json({
                    message: "berhasil menambahkan transaksi",
                    data: transaction
                })
            } else {
                res.status(400).json({
                    message: "gagal menambahkan product karena beberapa value tidak ada nilainya",
                })
            }

        } catch (error) {
            res.status(500).json({
                message: "gagal menambahkan transaksi",
                error: error.message
            })
        }
    },

    updateTransaction: async (req, res) => {
        const transactionId = req.params.id;
        const data = req.body;
        const userId = req.payload.id

        try {
            // Temukan todo berdasarkan ID dan User ID
            const transaction = await Transaction.findOne({
                where: {
                    id: transactionId,
                    user_id: userId
                }
            });

            if (!transaction) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            // Ubah data todo
            await transaction.update(data);

            res.json({
                message: 'Transaksi berhasil diubah',
                data: transaction
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    deleteTransaction: async (req, res) => {
        const transactionId = req.params.id;
        const userId = req.payload.id

        try {
            // Temukan transaction berdasarkan ID dan User ID
            const transaction = await Transaction.findOne({
                where: {
                    id: transactionId,
                    user_id: userId
                },
                include: [
                    {
                        model: Product,
                        as: 'products',
                    },
                ],
            });

            if (!transaction) {
                return res.status(404).json({
                    message: 'Transaksi tidak ditemukan'
                });
            }

            for (const detail of transaction.products) {
                const product = await Product.findByPk(detail.Detail_Transaction.product_id)

                if (!product) {
                    return res.status(404).json({
                        success: false,
                        message: `Produk dengan ID ${detail.product_id} tidak ditemukan.`,
                    });
                }

                // Menambahkan qty kembali ke stok
                await product.update({ stok: product.stok + detail.Detail_Transaction.qty });
            }

            // Hapusa transaction
            await transaction.destroy();

            res.json({
                message: 'Transaksi berhasil dihapus',
                data: transaction
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    }
}