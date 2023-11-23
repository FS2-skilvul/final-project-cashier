const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const { User } = require("../models")

module.exports = {
    login: async (req, res) => {
        try {
            let data = req.body

            if (data.email && data.password) {
                const user = await User.findOne({
                    where: {
                        email: data.email
                    }
                });

                if (!user) {
                    return res.status(400).json({
                        message: "email tidak ditemukan"
                    })
                }

                if (bcrypt.compareSync(data.password, user.password)) {
                    const token = jwt.sign({ id: user.id, nama: user.nama, email: data.email, role: user.role }, process.env.JWT_KEY)
                    return res.json({
                        message: "anda berhasil login",
                        token
                    })
                }

                return res.json({
                    message: "password anda salah"
                })

            }

            res.status(400).json({
                message: "email atau password anda masih kosong"
            })

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Terjadi kesalahan server"
            });
        }

    },
    register: async (req, res) => {
        try {
            let data = req.body;
            console.log(data);

            // Cek apakah email sudah terdaftar
            const existingUser = await User.findOne({
                where: {
                    email: data.email
                }
            });

            if (existingUser) {
                // Jika email sudah terdaftar, kirim respon email sudah terdaftar
                return res.status(400).json({
                    message: "Email sudah terdaftar. Gunakan email lain."
                });
            }

            // Email belum terdaftar, lakukan proses pendaftaran
            let saltRounds = 10;
            let hashPassword = bcrypt.hashSync(data.password, saltRounds);

            data.password = hashPassword;
            const createSuccess = await User.create(data);

            res.json({
                message: "Berhasil registrasi",
                data: createSuccess
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Terjadi kesalahan server"
            });
        }
    }
}