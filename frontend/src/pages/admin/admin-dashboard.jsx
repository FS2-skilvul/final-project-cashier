import React from 'react';
import NavbarAdmin from '../../components/navbar-admin';
import { useState } from 'react';
import TableDashboardAdmin from '../../components/table-dashboard-admin';

function AdminDashboard() {
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
	]);

	// const { products } = useSelector((state) => state.product);
	// const dispatch = useDispatch();
	// // const [filteredValue, setFilteredValue] = useState([]);

	// useEffect(() => {
	// 	dispatch(getDataProduct());
	// }, [dispatch]);

	// Searching data
	const searchBar = (e) => {
		setSearch(e.target.value);
		setCurrentPage(1);
	};

	const filteredValue = value.filter((item) => {
		if (!search || search === '') {
			return true;
		}
		const searchLower = search.toLowerCase();
		const itemNameLower = item.nama.toLowerCase();
		const itemKodeLower = item.kode.toLowerCase();

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
			<TableDashboardAdmin
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
					<td colSpan="8" className="text-center p-4">
						Data tidak ditemukan
					</td>
				</tr>
			</tbody>
		);
	}
	return (
		<div className="pt-20">
			<NavbarAdmin />
			<div className="flex flex-col w-full items-center space-y-10">
				<div className="flex w-[1200px] justify-center mt-9 py-9 bg-primary text-white font-bold text-base md:text-3xl shadow-2xl shadow-gray-300">
					Selamat Datang Admin, Ini Adalah Daftar User Kasir Online
				</div>
			</div>
			<main className="relative h-[40em] w-[85em] m-auto mt-8 bg-secondary border-2 shadow-xl border-primary rounded">
				<section className="flex flex-row justify-between m-4 mx-12 items-center">
					<div className="font-bold text-primary text-2xl">
						Daftar User Kasir Online
					</div>
					<input
						type="text"
						className="border border-primary rounded px-4 py-2"
						value={search}
						onChange={searchBar}
						placeholder="Cari User"
					></input>
				</section>
				<section className="flex justify-center ">
					<table className="table-auto border-2 border-collapse  w-full mx-8">
						<thead className="text-center bg-primary text-white">
							<tr>
								<th className=" border-2 w-1/12">No</th>
								<th className="border-2 w-2/12">Nama</th>
								<th className=" border-2 w-2/12">Nama Toko</th>
								<th className="border-2 w-4/12">Alamat Toko</th>
								<th className=" border-2 w-1/12">Cashflow</th>
								<th className="border-2 w-1/12">Stok Barang</th>
								<th className="border-2 w-1/12">Laporan Transaksi</th>
							</tr>
						</thead>
						{tableContent}
					</table>
				</section>
				<footer className="flex justify-center bg-primary absolute bottom-0 w-full h-[8%] item-center">
					<section className="relative w-full flex justify-between items-center mx-8">
						<div>
							<p className="flex text-center text-white ">
								{indexOfFirstValue + 1} -{' '}
								{Math.min(indexOfLastValue, totalItems)} data | Halaman{' '}
								{currentPage} | Jumlah User : {totalItems}
							</p>
							<p></p>
						</div>
						<div className="flex items-center justify-end gap-2">
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
					</section>
				</footer>
			</main>
		</div>
	);
}

export default AdminDashboard;
