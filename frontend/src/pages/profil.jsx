import { React, useEffect, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import { Link, useNavigate } from 'react-router-dom';
import { FaAddressCard, FaStore } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser, updateDataUser } from '../redux/reducers/user-reducers';
// import { MdPhotoCamera } from 'react-icons/md';
// import ImgKasir from '../assets/Close up on education and economy objects.png';

function ProfilePage() {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const { userSelf, isLoading } = useSelector((state) => state.user)
	const [formData, setFormData] = useState({
		nama: null,
		nama_toko: null,
		email: null,
		nomor_telepon: null,
		alamat_toko: null
	})

	useEffect(() => {
		dispatch(getDataUser())
	}, [dispatch])

	useEffect(() => {
		setFormData({
			nama: userSelf.nama || '',
			nama_toko: userSelf.nama_toko || '',
			email: userSelf.email || '',
			nomor_telepon: userSelf.nomor_telepon || '',
			alamat_toko: userSelf.alamat_toko || ''
		})
	}, [userSelf]);

	const handleClickGudang = (e) => {
		e.preventDefault();
		navigate('/user-dashboard');
	};
	const [showModal, setShowModal] = useState(false);

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
			alamat_toko: userSelf.alamat_toko ?? ''
		})
	}

	const submitDataProfile = (e) => {
		e.preventDefault()
		setFormData({
			nama: formData.nama  === '' ? null : formData.nama,
			nama_toko: formData.nama_toko === '' ? null : formData.nama_toko,
			email: formData.email === '' ? null : formData.email,
			nomor_telepon: formData.nomor_telepon === '' ? null : formData.nomor_telepon,
			alamat_toko: formData.alamat_toko === '' ? null : formData.alamat_toko
		})
		console.log(formData)
		dispatch(updateDataUser(userSelf.id, formData))
		toggleModal(e)
	}

	return (
		<div className="relative w-full h-screen bg-[#F2F4F9] pt-28 pb-12">
			<NavbarHome />
			<div className='flex h-auto w-full justify-center bg-[#F2F4F9] pb-12 px-3'>
				<main className='flex h-auto w-full justify-center'>
					<div className="bg-secondary border-2 rounded border-primary w-[40em] max-h-[36em] flex flex-col">
						<header className="bg-primary w-full py-4 text-left font-bold text-white flex items-center ">
							<div className='flex items-center'>
								<FaAddressCard className="ml-2 w-8 text-2xl" />
								<p className="text-lg ml-2">Data Diri</p>
							</div>
						</header>
						<form action="" onSubmit={toggleModal}>
							<section className="flex flex-col gap-2 w-full px-6 ">
								<div className="flex flex-col gap-1 pt-2">
									<p className="font-bold">Nama Pengguna :</p>
									<input
										type="text"
										required
										className="w-full border h-9 px-2 "
										placeholder="Masukkan Nama Pengguna"
										value={formData.nama ?? ''}
										onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-bold">Nama Toko :</p>
									<input
										type="text"
										className="w-full border h-9 px-2"
										placeholder="Masukkan Nama Toko"
										value={formData.nama_toko ?? ''}
										onChange={(e) => setFormData({ ...formData, nama_toko: e.target.value })}
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
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
										onChange={(e) => setFormData({ ...formData, nomor_telepon: e.target.value })}
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="font-bold">Alamat Toko :</p>
									<input
										type="text"
										className="w-full border h-9 px-2"
										placeholder="Masukkan Alamat Toko"
										value={formData.alamat_toko ?? ''}
										onChange={(e) => setFormData({ ...formData, alamat_toko: e.target.value })}
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
								<div className='bg-red-500 rounded-md hover:bg-red-600 w-fit'>
									<Link to={'/user-dashboard'} className='flex items-center justify-center px-2 py-2 sm:py-1 rounded-lg text-white space-x-2'>
										<svg width="16" height="16" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M13.583 1.91667C13.5833 1.61253 13.4885 1.31592 13.3118 1.06834C13.1352 0.820763 12.8856 0.634608 12.5979 0.535928C12.3102 0.437248 11.9989 0.43098 11.7074 0.518003C11.416 0.605025 11.1591 0.780983 10.9726 1.02125L0.764293 14.1462C0.565151 14.4022 0.457031 14.7173 0.457031 15.0417C0.457031 15.366 0.565151 15.6811 0.764293 15.9371L10.9726 29.0621C11.1591 29.3024 11.416 29.4783 11.7074 29.5653C11.9989 29.6524 12.3102 29.6461 12.5979 29.5474C12.8856 29.4487 13.1352 29.2626 13.3118 29.015C13.4885 28.7674 13.5833 28.4708 13.583 28.1667V22.3479C21.4274 22.5113 25.1958 24.0002 27.0887 25.619C28.8883 27.1575 29.2178 28.9673 29.5605 30.8631L29.6495 31.3517C29.7149 31.7012 29.9059 32.0149 30.1864 32.2335C30.4669 32.4521 30.8176 32.5608 31.1726 32.5389C31.5276 32.517 31.8623 32.3662 32.1139 32.1148C32.3654 31.8634 32.5164 31.5287 32.5385 31.1738C32.7878 27.1663 32.413 21.3592 29.5824 16.5015C26.8349 11.7867 21.8883 8.16125 13.583 7.78208V1.91667Z" fill="currentColor" />
										</svg>
										<p className='font-medium hidden sm:flex'>Kembali</p>
									</Link>
								</div>
								<div className='flex space-x-2'>
									<button type='reset' className="border border-primary px-2 py-1 rounded font-medium" onClick={resetFormData}>
										Reset
									</button>
									<button type='submit' disabled={isLoading ? 'disabled' : ''} className="border border-primary px-4 py-1 rounded bg-primary text-white font-medium">
										Simpan
									</button>
								</div>
							</div>
						</form>
					</div>
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
