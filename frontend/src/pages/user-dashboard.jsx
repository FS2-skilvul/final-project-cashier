import React, { useEffect, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import BarChart from '../components/bar-chart';
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser } from '../redux/reducers/user-reducers';

function UserDashboard() {
	const { userSelf, isLoading } = useSelector((state) => state.user);
	const { transactions } = useSelector((state) => state.transaction);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDataUser());
	}, [dispatch]);

	const total_barang = userSelf?.Products?.reduce(
		(total, product) => total + product.stok,
		0,
	);
	// Filter produk yang stoknya kurang dari 10
	const filteredProducts =
		userSelf?.Products?.filter((product) => product.stok <= 10) || [];

	return (
		<div className="relative w-screen h-screen bg-[#F2F4F9]">
			<NavbarHome />
			<div className="flex h-auto w-full justify-center bg-[#F2F4F9]">
				<div className="flex flex-col w-full max-w-[1200px] h-auto items-center space-y-10 bg-[#F2F4F9] pt-20 pb-12">
					{/* <div className='flex w-[1200px] justify-center mt-9 py-9 bg-primary text-white font-bold text-base md:text-3xl shadow-2xl shadow-gray-300'>
                    {userSelf.nama ? `Selamat Datang ${userSelf.nama}, Ini Adalah Semua Statistik dari UMKM Kamu` : ''}
                </div> */}
					<div className="flex flex-col w-full items-center space-y-10 sm:mb-4 px-3 lg:px-4">
						<div className="flex w-full justify-center mt-9 px-4 py-4 sm:py-6 lg:py-9 bg-primary text-white font-bold text-lg sm:text-xl md:text-3xl shadow-2xl shadow-gray-300">
							{userSelf.nama
								? `Selamat Datang ${userSelf.nama}, Ini Adalah Semua Statistik dari UMKM Kamu`
								: ''}
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 w-full px-3 sm:px-0 justify-center">
						<div className="flex justify-center">
							<div className="w-full sm:w-[300px] bg-white px-9 py-4 space-y-6 text-gray-500 rounded-lg shadow-2xl shadow-gray-300">
								<div className="flex w-full items-center justify-between">
									<p className="text-5xl font-semibold text-primary">
										{total_barang ? total_barang : 0}
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="50"
										viewBox="0 0 48 48"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinejoin="round"
											strokeWidth="4"
										>
											<path d="M44 14L24 4L4 14v20l20 10l20-10z" />
											<path
												strokeLinecap="round"
												d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
											/>
										</g>
									</svg>
								</div>
								<p className="font-bold text-lg">Total Stok Barang</p>
							</div>
						</div>
						<div className="flex justify-center col-span-2 sm:col-span-1">
							<div className="w-full sm:w-[300px] bg-white px-9 py-4 space-y-6 text-gray-500 rounded-lg shadow-2xl shadow-gray-300">
								<div className="flex w-full items-center justify-between">
									<p className="text-5xl font-semibold text-primary">
										{userSelf && userSelf.Products
											? userSelf.Products.length
											: 0}
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="50"
										viewBox="0 0 2048 2048"
									>
										<path
											fill="currentColor"
											d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354zm0 640l177-89l-463-265l-211 106zm315-157l182-91l-497-249l-149 75zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288zm-640 710v-455l-384-192v454zm64-566l369-184l-369-185l-369 185zm576-1l448-224l448 224v527l-448 224l-448-224zm384 576v-305l-256-128v305zm384-128v-305l-256 128v305zm-320-288l241-121l-241-120l-241 120z"
										/>
									</svg>
								</div>
								<p className="font-bold text-lg">Jenis Barang</p>
							</div>
						</div>
						<div className="flex justify-center col-span-2 lg:col-span-1">
							<div className="w-full sm:w-[300px] bg-white px-9 py-4 space-y-6 text-gray-500 rounded-lg shadow-2xl shadow-gray-300">
								<div className="flex w-full items-center justify-between">
									<p className="text-5xl font-semibold text-primary">
										{transactions ? transactions.length : 0}
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="50"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
										/>
									</svg>
								</div>
								<p className="font-bold text-lg">Total Transaksi</p>
							</div>
						</div>
					</div>
					<BarChart />
					<div className="w-full px-3 lg:px-4 ">
						<div className="flex items-center space-x-6 text-white bg-[#EA0000] px-4 sm:px-9 py-2 rounded-t-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 256 256"
							>
								<path
									fill="currentColor"
									d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72M120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
								/>
							</svg>
							<p className="text-xl font-semibold">
								Barang Yang Stoknya Akan Habis
							</p>
						</div>
						{filteredProducts.length > 0 ? (
							filteredProducts.map((product) => (
								<div
									key={product.id}
									className="flex items-center justify-between bg-white px-4 sm:px-9 py-3 text-xl font-semibold text-gray-700 border-x-2 border-b-2 border-gray-400 space-x-1"
								>
									<p>{product.nama}</p>
									<p className="whitespace-nowrap">
										{product.stok} <span>pcs</span>
									</p>
								</div>
							))
						) : (
							<div className="flex items-center justify-between bg-white px-4 sm:px-9 py-3 text-xl font-semibold text-gray-700 border-x-2 border-b-2 border-gray-400">
								<p>Tidak ada barang yang stoknya menipis</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDashboard;
