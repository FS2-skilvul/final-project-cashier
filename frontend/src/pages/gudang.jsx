import { useEffect, useState } from 'react';
import NavbarHome from '../components/navbar-home';
import TableGudang from '../components/table-gudang';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProduct } from '../redux/reducers/product-reducers';

function GudangPage() {
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [value, setValue] = useState([
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Miwdk',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 1,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},

		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 12,
			nama: 'Minyak',
			kode: '#123',
			beli: 45.0,
			jual: 1,
			stok: 1,
			id: 1,
		},
	]);

	// const searchBar = (e) => {
	// 	setSearch(e.target.value);
	// 	setCurrentPage(1);
	// };

	// const filteredValue = value.filter((item) => {
	// 	if (!search || search === '') {
	// 		return true;
	// 	}
	// 	return (
	// 		item.nama
	// 			.toString()
	// 			.toLowerCase()
	// 			.includes(search.toString().toLowerCase()) ||
	// 		item.kode
	// 			.toString()
	// 			.toLowerCase()
	// 			.includes(search.toString().toLowerCase())
	// 	);
	// });

	// const nextPage = () => {
	// 	setCurrentPage((prevPage) => prevPage + 1);
	// };

	// const prevPage = () => {
	// 	setCurrentPage((prevPage) => prevPage - 1);
	// };

	// const totalItems = filteredValue.length;
	// const indexOfLastValue = currentPage * 8;
	// const indexOfFirstValue = indexOfLastValue - 8;
	// const currentValues = filteredValue.slice(
	// 	indexOfFirstValue,
	// 	indexOfLastValue,
	// );
	// let tableContent;

	// if (currentValues.length > 0) {
	// 	tableContent = currentValues.map((item) => (
	// 		<TableGudang
	// 			key={item.id}
	// 			no={item.no}
	// 			nama={item.nama}
	// 			kode={item.kode}
	// 			beli={item.beli}
	// 			jual={item.jual}
	// 			stok={item.stok}
	// 			id={item.id}
	// 		/>
	// 	));
	// } else {
	// 	tableContent = (
	// 		<tr>
	// 			<td colSpan="8" className="text-center p-4">
	// 				Data tidak ditemukan
	// 			</td>
	// 		</tr>
	// 	);
	// }

	const { products } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	// const [filteredValue, setFilteredValue] = useState([]);

	useEffect(() => {
		dispatch(getDataProduct());
	}, [dispatch]);

	// Searching data
	const searchBar = (e) => {
		setSearch(e.target.value);
		setCurrentPage(1);
	};

	const filteredValue = products.filter((item) => {
		if (!search || search === '') {
			return true;
		}
		const searchLower = search.toLowerCase();
		const itemNameLower = item.nama.toLowerCase();
		const itemKodeLower = item.kode_barang.toLowerCase();

		return (
			itemNameLower.includes(searchLower) || itemKodeLower.includes(searchLower)
		);
	});

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const totalItems = filteredValue.length;
	const indexOfLastValue = currentPage * 8;
	const indexOfFirstValue = indexOfLastValue - 8;
	const currentValues = filteredValue.slice(
		indexOfFirstValue,
		indexOfLastValue,
	);
	let tableContent;

	// Menampilkan data
	if (currentValues.length > 0) {
		tableContent = currentValues.map((item, index) => (
			<TableGudang
				key={item.id}
				no={index + 1}
				nama={item.nama}
				kode={item.kode_barang}
				beli={item.harga_beli}
				jual={item.harga_jual}
				stok={item.stok}
				id={item.id}
			/>
		));
	} else {
		tableContent = (
			<tbody>
				<tr>
					<td colSpan="7" className="text-center p-4">
						Data tidak ditemukan
					</td>
				</tr>
			</tbody>
		);
	}

	return (
		<div className="relative flex flex-col items-center w-full h-screen bg-[#F2F4F9] px-3">
			<NavbarHome />
			<div className='flex h-auto w-full justify-center bg-[#F2F4F9]'>
				<div className='h-auto rounded-lg w-full max-w-[1200px] bg-[#F2F4F9] pt-28'>
					<main className='w-full max-w-full h-auto pb-9 bg-[#F2F4F9]'>
						<section className="w-full h-full border rounded-lg">
							<div className="flex justify-center md:justify-start w-full py-2 bg-primary items-center rounded-t-lg border-t border-x border-black">
								<p className="ml-8 font-bold text-white text-xl">DAFTAR USER</p>
							</div>
							<div className='px-4 sm:px-8 pb-8 border bg-white border-t-black border-x-black h-full'>
								<div className='flex w-full justify-start space-x-2 sm:justify-between items-center py-3'>
									<div className='block rounded-lg'>
										<Link to={'/gudang/tambah'} className='flex w-full items-center px-3 sm:px-4 bg-green-500 hover:bg-green-600 py-3 sm:py-2 rounded-lg text-white sm:space-x-4'>
											<FaPlus />
											<p className='font-bold whitespace-nowrap hidden sm:flex'>Tambah Barang</p>
										</Link>
									</div>
									<div className='flex w-full justify-start sm:justify-end'>
										<input
											type="text"
											className=" border-2 border-primary rounded px-3 sm:px-8 w-full sm:w-fit py-1 h-fit"
											value={search}
											onChange={searchBar}
											placeholder="Cari Barang"
										></input>
									</div>
								</div>
								<div className='flex flex-col h-full justify-between space-y-9 '>
									<div className='overflow-x-auto'>
										<div className="w-[900px] lg:w-full  flex justify-center">
											<table className="table-auto border-collapse w-full border-r-2 border-l-2 border-b-2">
												<thead className="text-center bg-primary text-white ">
													<tr>
														<th className="p-1 py-2 border">No</th>
														<th className="p-1 py-2 border">Nama Barang</th>
														<th className="p-1 py-2 border">Kode Barang</th>
														<th className="p-1 py-2 border">Harga Beli</th>
														<th className="p-1 py-2 border">Harga Jual</th>
														<th className="p-1 py-2 border">Stok Barang</th>
														<th className="p-1 py-2 border">Action</th>
													</tr>
												</thead>
												{tableContent}
											</table>
										</div>
									</div>

								</div>
							</div>
							<div className="flex bg-primary w-full h-auto items-center py-2 px-8 rounded-b-lg border-b border-x border-black ">
								<div className="grid sm:grid-cols-2 gap-2 w-full justify-center sm:justify-between items-center">
									<div className='w-full'>
										<p className="flex text-center text-white ">
											{indexOfFirstValue + 1} -{' '}
											{Math.min(indexOfLastValue, totalItems)} data | Halaman{' '}
											{currentPage} | Jumlah Barang : {totalItems}
										</p>
										<p></p>
									</div>
									<div className="flex w-full items-center justify-center sm:justify-end gap-2">
										<button
											onClick={prevPage}
											disabled={currentPage === 1}
											className="px-4 py-1 text-blue-500 bg-white rounded"
										>
											Previous
										</button>
										<button
											onClick={nextPage}
											disabled={currentValues.length < 8}
											className="px-4 py-1 text-blue-500 bg-white rounded"
										>
											Next
										</button>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default GudangPage;
