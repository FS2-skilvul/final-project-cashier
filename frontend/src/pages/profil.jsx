import React from "react";
import { useState } from "react";

function profil() {
  const [namaPengguna, setNama] = useState("");
  const [namaToko, setToko] = useState("");
  const [email, setEmail] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [fotoProfil, setFoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang telah diinput
    console.log("Nama Pengguna:", namaPengguna);
    console.log("Nama Toko:", namaToko);
    console.log("Email:", email);
    console.log("Nomor Telepon:", nomorTelepon);
    console.log("Alamat:", alamat);
    console.log("Foto Profil:", fotoProfil);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Data diri</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="namaPengguna"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Nama Pengguna
            </label>
            <input
              type="text"
              id="namaPengguna"
              name="namaPengguna"
              value={namaPengguna}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="namaToko"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Nama Toko
            </label>
            <input
              type="text"
              id="namaToko"
              name="namaToko"
              value={namaToko}
              onChange={(e) => setToko(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nomorTelepon"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="nomorTelepon"
              name="nomorTelepon"
              value={nomorTelepon}
              onChange={(e) => setNomorTelepon(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fotoProfil"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Foto Profil
            </label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              accept="image/*"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default profil;
