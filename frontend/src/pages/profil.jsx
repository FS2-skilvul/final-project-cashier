import { React, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import { Link, useNavigate } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';
import ImgKasir from '../assets/Close up on education and economy objects.png';

function ProfilePage() {
	const navigate = useNavigate();
	const handleClickGudang = (e) => {
		e.preventDefault();
		navigate('/user-dashboard');
	};
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div className="pt-20">
			<NavbarHome />
			<main className="flex">
				<div className="bg-secondary border-2 rounded border-primary w-[40em] h-[36em] flex flex-col mx-auto mt-8 container mr-12">
					<header className="bg-primary w-full py-4 text-left font-bold text-white flex items-center ">
						<FaAddressCard className="ml-2 w-8 text-2xl" />
						<p className="text-lg ml-2">Data Diri</p>
					</header>
					<form action="">
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
									type="file"
									className="w-full border h-9 px-2"
									placeholder="Nama File"
									value={''}
								/>
							</div>
						</section>
					</form>
					<div className="flex flex-row gap-2 justify-end mr-8 py-4">
						{/* Tombol kembali ke data terakhir */}
						<button
							className="border border-primary px-2 py-1 rounded"
							onClick={''}
						>
							Reset
						</button>
						<button
							className="border border-primary px-4 py-1 rounded bg-primary text-white"
							onClick={toggleModal}
						>
							Simpan Perubahan
						</button>
					</div>
				</div>
				<div className=" border-2 rounded border-primary w-[24em] h-[24em] flex flex-col mx-auto mt-8 ml-12 justify-center">
					<header className="bg-primary w-full py-4 text-left font-bold text-white flex items-center ">
						<MdPhotoCamera className="ml-2 w-8 text-2xl" />
						<p className="text-lg ml-2">Foto Profile</p>
					</header>
					<div className="border p-2 w-full h-full">
						<img
							src="https://plus.unsplash.com/premium_photo-1701187887029-907bed510db6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="lalala"
							className="h-full object-cover rounded-lg"
						/>
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
		</div>
	);
}

export default ProfilePage;
