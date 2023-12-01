import { React, useEffect, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	editDataProductById,
	getDataProductById,
} from '../redux/reducers/product-reducers';

function GudangEdit() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const { productById } = useSelector((state) => state.product);
	const [showModal, setShowModal] = useState(false);
	const [kodeBarang, setKodeBarang] = useState('');
	const [namaBarang, setNamaBarang] = useState('');
	const [hargaBeli, setHargaBeli] = useState(1);
	const [hargaJual, setHargaJual] = useState(1);
	const [stok, setStok] = useState(1);

	useEffect(() => {
		if (id) {
			try {
				dispatch(getDataProductById(id));
			} catch (error) {
				// Tangani kesalahan jika ada
				console.error('Error adding user:', error);

				// Dapatkan status code dari error (jika ada)
				const statusCode = error.response ? error.response.status : null;

				// Dapatkan pesan kesalahan dari error (jika ada)
				const errorMessage = error.response
					? error.response.data.message
					: null;

				// Log status code dan pesan kesalahan
				console.log('Status Code:', statusCode);
				console.log('Error Message:', errorMessage);
				navigate('/gudang');
			}
		} else {
			navigate('/gudang');
		}
	}, [dispatch, id]);

	useEffect(() => {
		setKodeBarang(productById.kode_barang || '');
		setNamaBarang(productById.nama || '');
		setHargaBeli(productById.harga_beli || '');
		setHargaJual(productById.harga_jual || '');
		setStok(productById.stok || '');
	}, [productById]);

	const toggleModal = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	const handleEditBarang = (event) => {
		event.preventDefault();
		const newData = {
			kode_barang: kodeBarang,
			nama: namaBarang,
			harga_beli: hargaBeli,
			harga_jual: hargaJual,
			stok: stok,
		};
		dispatch(editDataProductById(id, newData));
		navigate('/gudang');
	};

	return (
		<div className="relative w-full h-screen bg-[#F2F4F9] pt-20 pb-12">
			<NavbarHome />
			<main className="bg-secondary border-2 rounded border-primary w-[40em] h-[36em] flex flex-col mx-auto mt-8">
				<div>
					<header className="bg-primary w-full p-4 text-left font-bold text-white">
						<p className="pl-4 text-lg">Edit Barang</p>
					</header>
					<form action="" onSubmit={toggleModal}>
						<section className="flex flex-col gap-4 w-full p-6 ">
							<div className="flex flex-col gap-2">
								<p className="font-bold">Kode Barang :</p>
								<input
									type="text"
									className="w-full border h-9 px-2 "
									placeholder="Kode Produk"
									required
									// value={productById.kode_barang || ''}
									value={kodeBarang}
									onChange={(e) => setKodeBarang(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-bold">Nama Barang :</p>
								<input
									type="text"
									className="w-full border h-9 px-2"
									placeholder="Nama Produk"
									required
									// value={productById.nama || ''}
									value={namaBarang}
									onChange={(e) => setNamaBarang(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-bold">Harga Beli Barang :</p>
								<input
									type="number"
									className="w-full border h-9 px-2"
									placeholder="Harga Beli Produk"
									required
									min={1}
									// value={productById.harga_beli || ''}
									value={hargaBeli}
									onChange={(e) => setHargaBeli(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-bold">Harga Jual Barang :</p>
								<input
									type="number"
									className="w-full border h-9 px-2"
									placeholder="Harga Jual Produk"
									required
									min={1}
									// value={productById.harga_jual || ''}
									value={hargaJual}
									onChange={(e) => setHargaJual(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-bold">Jumlah Barang Masuk :</p>
								<input
									type="number"
									className="w-full border h-9 px-2"
									placeholder="Jumlah Stok Produk Masuk"
									required
									min={1}
									// value={productById.stok || ''}
									value={stok}
									onChange={(e) => setStok(e.target.value)}
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
								type="submit"
								className="border border-primary px-4 py-1 rounded bg-primary text-white"
							>
								Edit
							</button>
						</div>
					</form>
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
									onClick={handleEditBarang}
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

export default GudangEdit;
