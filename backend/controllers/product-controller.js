// const bcrypt = require('bcrypt');
const { Product } = require('../models');
// const Todo = require('../models/Todo');

module.exports = {
    getAllProduct: async (req, res) => {
        try {
            const userId = req.payload.id
            const roleUser = req.payload.role

            const productAdmin = await Product.findAll()
            const productUser = await Product.findAll({
                where: {
                    user_id: userId
                }
            })

            if (roleUser == 'admin') {
                return res.status(200).json({
                    message: 'Data product berhasil didapatkan',
                    data: productAdmin
                })
            } else if (roleUser == 'user') {
                return res.status(200).json({
                    message: 'Data product berhasil didapatkan',
                    data: productUser
                })
            } else {
                return res.status(404).json({
                    message: 'Data product gagal didapatkan',
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Terjadi kesalah server',
                error: error.message
            })
        }

    },

    getProductById: async (req, res) => {
        const productId = req.params.id
        const userId = req.payload.id

        try {
            // Temukan todo berdasarkan ID dan User ID
            const product = await Product.findOne({
                where: {
                    id: productId,
                    user_id: userId
                }
            });

            if (!product) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Berhasil mendapatkan product',
                data: product
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    createProduct: async (req, res) => {
        const userId = req.payload.id; // Ambil ID pengguna dari token
        let data = req.body
        data.user_id = userId

        try {
            // input data
            if (data.kode_barang && data.nama && data.harga_beli && data.harga_jual && data.stok) {
                const product = await Product.create(data)

                // send response
                res.status(201).json({
                    message: "berhasil menambahkan product",
                    data: product
                })
            } else {
                res.status(404).json({
                    message: "gagal menambahkan product karena beberapa value tidak ada nilainya",
                })
            }

        } catch (error) {
            res.status(500).json({
                message: "gagal menambahkan product",
                error: error.message
            })
        }
    },

    updateProduct: async (req, res) => {
        const productId = req.params.id;
        const data = req.body;
        const userId = req.payload.id

        try {
            // Temukan todo berdasarkan ID dan User ID
            const product = await Product.findOne({
                where: {
                    id: productId,
                    user_id: userId
                }
            });

            if (!product) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            // Ubah data todo
            await product.update(data);

            res.json({
                message: 'Product berhasil diubah',
                data: product
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    deleteProduct: async (req, res) => {
        const productId = req.params.id;
        const userId = req.payload.id

        try {
            // Temukan todo berdasarkan ID dan User ID
            const product = await Product.findOne({
                where: {
                    id: productId,
                    user_id: userId
                }
            });

            if (!product) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            // Hapusa todo
            await product.destroy();

            res.json({
                message: 'Product berhasil dihapus',
                data: product
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    }
}