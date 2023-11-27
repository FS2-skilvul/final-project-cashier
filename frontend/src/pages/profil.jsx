import { React, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import { Link, useNavigate } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';

function ProfilePage() {
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
			<main className="flex flex-row items-center justify-center">
				<div className="bg-secondary border-2 rounded border-primary w-[40em] h-[36em] flex flex-col mx-auto mt-8 ">
					<header className="bg-primary w-full py-4 text-left font-bold text-white flex items-center ">
						<FaAddressCard className="m-2 w-8" />
						<p className="text-lg ">Data Diri</p>
					</header>
					<section className="flex flex-col gap-2 w-full px-6 ">
						<div className="flex flex-col gap-1 pt-2">
							<p className="font-bold">Nama Pengguna :</p>
							<input
								type="text"
								className="w-full border h-9 px-2 "
								placeholder="Masukkan Nama Pengguna"
								value={''}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">Nama Toko :</p>
							<input
								type="text"
								className="w-full border h-9 px-2"
								placeholder="Masukkan Nama Toko"
								value={''}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">Email :</p>
							<input
								type="email"
								className="w-full border h-9 px-2"
								placeholder="Masukkan Email"
								value={''}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">No Telp :</p>
							<input
								type="number"
								className="w-full border h-9 px-2"
								placeholder="Masukkan No Telp"
								value={''}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">Alamat Toko :</p>
							<input
								type="text"
								className="w-full border h-9 px-2"
								placeholder="Masukkan Alamat Toko"
								value={''}
							/>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-bold">Foto Profile :</p>
							<input
								type=""
								className="w-full border h-9 px-2"
								placeholder="Nama File"
								value={''}
							/>
						</div>
					</section>
					<div className="flex flex-row gap-2 justify-end mr-8 py-4">
						<Link to={'/gudang'}>
							<button className="border border-primary px-2 py-1 rounded">
								Batalkan
							</button>
						</Link>
						<button
							className="border border-primary px-4 py-1 rounded bg-primary text-white"
							onClick={toggleModal}
						>
							Edit
						</button>
					</div>
				</div>
				<div className="bg-secondary border-2 rounded border-primary w-[40em] h-[36em] flex flex-col mx-auto mt-8 ">
					<p>Foto Profile</p>
					<img src="" alt="lalala" />
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

export default ProfilePage;
