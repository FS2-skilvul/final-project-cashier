const bcrypt = require('bcrypt');
const { User, Product } = require('../models');
// const Todo = require('../models/Todo');

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const userId = req.payload.id
            const roleUser = req.payload.role

            const userAdmin = await User.findAll()
            const userUser = await User.findByPk(userId, { include: Product })

            if (roleUser == 'admin') {
                return res.status(200).json({
                    message: 'Data user berhasil didapatkan',
                    data: userAdmin
                })
            } else if (roleUser == 'user') {
                return res.status(200).json({
                    message: 'Data user berhasil didapatkan',
                    data: userUser
                })
            } else {
                return res.status(404).json({
                    message: 'Data user gagal didapatkan',
                })
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Terjadi kesalah server',
                error: error.message
            })
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id

        try {
            // Temukan user berdasarkan ID
            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: 'User tidak ditemukan'
                });
            }

            res.status(200).json({
                message: 'Berhasil mendapatkan user',
                data: user
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    createUser: async (req, res) => {
        let data = req.body

        try {
            // hash password
            const hashPassword = bcrypt.hashSync(data.password, 10)
            data.password = hashPassword

            // input data
            await User.create(data)

            // send response
            res.status(201).json({
                message: "berhasil menambahkan user"
            })

        } catch {
            res.json({
                message: "gagal menambahkan user"
            })
        }
    },

    updateUser: async (req, res) => {
        const userId = req.params.id;
        const data = req.body;

        try {
            // Temukan user berdasarkan ID
            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: 'user tidak ditemukan'
                });
            }

            // Cek apakah password diubah
            if (data.password) {
                // hash password
                const hashPassword = bcrypt.hashSync(data.password, 10)
                data.password = hashPassword
            }

            // Ubah data user
            await user.update(data);

            res.json({
                message: 'User berhasil diubah',
                data: user
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    },

    deleteUser: async (req, res) => {
        const userId = req.params.id;

        try {
            // Temukan user berdasarkan ID
            const user = await User.findByPk(userId);

            if (!user) {
                return res.status(404).json({
                    message: 'user tidak ditemukan'
                });
            }

            // Hapusa user
            await user.destroy();

            res.json({
                message: 'user berhasil dihapus',
                data: user
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Terjadi kesalahan server'
            });
        }
    }
}