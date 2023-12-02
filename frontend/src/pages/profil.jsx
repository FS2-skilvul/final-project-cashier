import { React, useEffect, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import { Link, useNavigate } from 'react-router-dom';
import { FaAddressCard, FaCheckCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser, updateDataUser } from '../redux/reducers/user-reducers';
// import { MdPhotoCamera } from 'react-icons/md';
// import ImgKasir from '../assets/Close up on education and economy objects.png';

function ProfilePage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showSuccess, setShowSuccess] = useState(false);
	const { userSelf, isLoading } = useSelector((state) => state.user);
	const [formData, setFormData] = useState({
		nama: null,
		nama_toko: null,
		email: null,
		nomor_telepon: null,
		alamat_toko: null,
	});

	useEffect(() => {
		dispatch(getDataUser());
	}, [dispatch]);

	useEffect(() => {
		setFormData({
			nama: userSelf.nama || '',
			nama_toko: userSelf.nama_toko || '',
			email: userSelf.email || '',
			nomor_telepon: userSelf.nomor_telepon || '',
			alamat_toko: userSelf.alamat_toko || '',
		});
	}, [userSelf]);

	const handleClickGudang = (e) => {
		e.preventDefault();
		navigate('/user-dashboard');
	};
	const [showModal, setShowModal] = useState(false);

	const toggleShowSuccess = (e) => {
		e.preventDefault();
		setShowSuccess(!showSuccess);
		console.log(showSuccess);
	};

	const toggleModal = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	const resetFormData = (event) => {
		event.preventDefault();
		setFormData({
			nama: userSelf.nama ?? '',
			nama_toko: userSelf.nama_toko ?? '',
			email: userSelf.email ?? '',
			nomor_telepon: userSelf.nomor_telepon ?? '',
			alamat_toko: userSelf.alamat_toko ?? '',
		});
	};

	const submitDataProfile = (e) => {
		e.preventDefault();
		setFormData({
			nama: formData.nama === '' ? null : formData.nama,
			nama_toko: formData.nama_toko === '' ? null : formData.nama_toko,
			email: formData.email === '' ? null : formData.email,
			nomor_telepon:
				formData.nomor_telepon === '' ? null : formData.nomor_telepon,
			alamat_toko: formData.alamat_toko === '' ? null : formData.alamat_toko,
		});
		console.log(formData);
		dispatch(updateDataUser(userSelf.id, formData));
		toggleModal(e);
		toggleShowSuccess(e);
	};

	return (
		<div className="relative w-full h-screen bg-[#F2F4F9] pt-28 pb-12">
			<NavbarHome />
			<div className="flex h-auto w-full justify-center bg-[#F2F4F9] pb-12 px-3">
				<main className="flex h-auto w-full justify-center">
					<div className="bg-secondary border-2 rounded border-primary w-[40em] max-h-[36em] flex flex-col">
						<header className="bg-primary w-full py-4 text-left font-bold text-white flex items-center ">
							<div className="flex items-center">
								<FaAddressCard className="ml-2 w-8 text-2xl" />
								<p className="text-lg ml-2">Data Diri</p>
							</div>
						</header>
						<form
							action=""
							onSubmit={toggleModal}
							className="flex flex-col items-end"
						>
							<section className="flex flex-col gap-2 w-full px-6 ">
								<div className="flex flex-col gap-1 pt-2">
									<p className="font-bold">Nama Pengguna :</p>
									<input
										type="text"
										required
										className="w-full border h-9 px-2 "
										placeholder="Masukkan Nama Pengguna"
										value={formData.nama ?? ''}
										onChange={(e) =>
											setFormData({ ...formData, nama: e.target.value })
										}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-bold">Nama Toko :</p>
									<input
										type="text"
										className="w-full border h-9 px-2"
										placeholder="Masukkan Nama Toko"
										value={formData.nama_toko ?? ''}
										onChange={(e) =>
											setFormData({ ...formData, nama_toko: e.target.value })
										}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-bold">Email :</p>
									<input
										type="email"
										required
										className="w-full border h-9 px-2"
										placeholder="Masukkan Email"
										value={formData.email ?? ''}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-bold">No Telp :</p>
									<input
										type="number"
										className="w-full border h-9 px-2"
										placeholder="Masukkan No Telp"
										value={formData.nomor_telepon ?? ''}
										min={0}
										onChange={(e) =>
											setFormData({
												...formData,
												nomor_telepon: e.target.value,
											})
										}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-bold">Alamat Toko :</p>
									<input
										type="text"
										className="w-full border h-9 px-2"
										placeholder="Masukkan Alamat Toko"
										value={formData.alamat_toko ?? ''}
										onChange={(e) =>
											setFormData({ ...formData, alamat_toko: e.target.value })
										}
									/>
								</div>
								{/* <div className="flex flex-col gap-1">
								<p className="font-bold">Foto Profile :</p>
								<input
									type="file"
									className="w-full border h-9 px-2"
									placeholder="Nama File"
									value={''}
								/>
							</div> */}
							</section>
							<div className="flex justify-between px-4 py-4">
								<div className="flex space-x-2 ">
									<button
										type="reset"
										className="border border-primary px-2 py-1 rounded font-medium"
										onClick={resetFormData}
									>
										Reset
									</button>
									<button
										type="submit"
										disabled={isLoading ? 'disabled' : ''}
										className="border border-primary px-4 py-1 rounded bg-primary text-white font-medium"
									>
										Simpan
									</button>
								</div>
							</div>
						</form>
					</div>
					{showSuccess && (
						<div className="fixed inset-0 flex items-center justify-center z-10 ">
							<div className="absolute inset-0 bg-black opacity-50"></div>
							<div className="bg-white p-6 rounded-xl z-20 w-[25em] h-[15em] items-center flex flex-col justify-center relative">
								<button
									className="absolute right-0 top-0 m-5"
									onClick={toggleShowSuccess}
								>
									<MdClose className="text-2xl font-bold" />
								</button>
								<div className="flex justify-center">
									<FaCheckCircle className="text-5xl text-center m-2 fill-primary" />
								</div>
								<h2 className="text-xl font-bold mb-2 text-center text-primary">
									User Telah di Perbarui
								</h2>
								<div className="flex justify-center">
									<button
										onClick={toggleShowSuccess}
										className="border-blue-500 hover:bg-blue-700 text-primary hover:text-white font-bold py-2 px-16 rounded mt-4 border-2 "
									>
										OK
									</button>
								</div>
							</div>
						</div>
					)}
					{/* <div className=" border-2 rounded border-primary w-[24em] h-[24em] flex flex-col mx-auto mt-8 ml-12 justify-center">
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
				</div> */}
				</main>
				<section className="relative">
					{showModal && (
						<div className="fixed inset-0 flex items-center justify-center z-10">
							<div className="absolute inset-0 bg-black opacity-50"></div>
							<div className="bg-white p-6 rounded z-20 ">
								<h2 className="text-xl font-bold mb-2 text-center">
									Simpan Perubahan ?
								</h2>
								<div className="flex gap-4 self-end">
									<button
										onClick={toggleModal}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
									>
										Batalkan
									</button>
									<button
										onClick={submitDataProfile}
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
		</div>
	);
}

export default ProfilePage;
