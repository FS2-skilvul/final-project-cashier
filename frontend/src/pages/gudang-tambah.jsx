import { React, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import { Link, useNavigate } from 'react-router-dom';

function GudangTambah() {
	const navigate = useNavigate();
	const handleClickGudang = (e) => {
		e.preventDefault();
		navigate('/gudang');
	};
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<>
			<NavbarHome />
			<main className="bg-secondary border-2 rounded border-primary w-[40em] h-[36em] flex flex-col mx-auto mt-8">
				<div>
					<header className="bg-primary w-full p-4 text-left font-bold text-white">
						<p className="pl-4 text-lg">Tambah Barang</p>
					</header>
					<section className="flex flex-col gap-4 w-full p-6 ">
						<div className="flex flex-col gap-2">
							<p className="font-bold">Kode Barang :</p>
							<input
								type="text"
								className="w-full border h-9 px-2 "
								placeholder="Kode Produk"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p className="font-bold">Nama Barang :</p>
							<input
								type="text"
								className="w-full border h-9 px-2"
								placeholder="Nama Produk"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p className="font-bold">Harga Beli Barang :</p>
							<input
								type="number"
								className="w-full border h-9 px-2"
								placeholder="Harga Beli Produk"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p className="font-bold">Harga Jual Barang :</p>
							<input
								type="number"
								className="w-full border h-9 px-2"
								placeholder="Harga Jual Produk"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p className="font-bold">Jumlah Barang Masuk :</p>
							<input
								type="number"
								className="w-full border h-9 px-2"
								placeholder="Jumlah Stok Produk Masuk"
							/>
						</div>
					</section>
					<div className="flex flex-row gap-2 justify-end mr-8">
						<Link to={'/gudang'}>
							<button className="border border-primary px-2 py-1 rounded">
								Batalkan
							</button>
						</Link>
						<button
							className="border border-primary px-4 py-1 rounded bg-primary text-white"
							onClick={toggleModal}
						>
							Tambah
						</button>
					</div>
				</div>
			</main>
			<section className="relative">
				{showModal && (
					<div className="fixed inset-0 flex items-center justify-center z-10">
						<div className="absolute inset-0 bg-black opacity-50"></div>
						<div className="bg-white p-6 rounded z-20">
							<h2 className="text-xl font-bold mb-2 text-center">
								Simpan Perubahan ?
							</h2>
							<div className="flex gap-4">
								<button
									onClick={toggleModal}
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
								>
									Batalkan
								</button>
								<button
									onClick={handleClickGudang}
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
								>
									Simpan
								</button>
							</div>
						</div>
					</div>
				)}
			</section>
		</>
	);
}

export default GudangTambah;
