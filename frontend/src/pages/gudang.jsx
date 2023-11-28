import { useState } from 'react';
import NavbarHome from '../components/navbar-home';
import TableGudang from '../components/table-gudang';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

	const searchBar = (e) => {
		setSearch(e.target.value);
		setCurrentPage(1);
	};

	const filteredValue = value.filter((item) => {
		if (!search || search === '') {
			return true;
		}
		return (
			item.nama
				.toString()
				.toLowerCase()
				.includes(search.toString().toLowerCase()) ||
			item.kode
				.toString()
				.toLowerCase()
				.includes(search.toString().toLowerCase())
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

	if (currentValues.length > 0) {
		tableContent = currentValues.map((item) => (
			<TableGudang
				key={item.id}
				no={item.no}
				nama={item.nama}
				kode={item.kode}
				beli={item.beli}
				jual={item.jual}
				stok={item.stok}
				id={item.id}
			/>
		));
	} else {
		tableContent = (
			<tr>
				<td colSpan="8" className="text-center p-4">
					Data tidak ditemukan
				</td>
			</tr>
		);
	}

	return (
		<div className="relative w-full h-screen bg-[#F2F4F9] pt-20 pb-12">
			<NavbarHome />
			<main className="relative h-[36em] w-[65em] m-auto mt-8 bg-secondary border shadow-xl border-primary rounded">
				<header className="flex justify-start w-full h-[8%] bg-primary items-center">
					<p className="ml-8 font-bold text-white text-xl">Daftar Barang</p>
				</header>
				<section className="flex flex-row justify-between relative m-8">
					<Link to={'/gudang/tambah'}>
						<button className="border-2 border-primary rounded px-4 py-2 absolute left-0 -top-5 bg-green-500 flex items-center gap-2 font-bold text-white">
							<FaPlus />
							Tambah Barang
						</button>
					</Link>
					<input
						type="text"
						className="border-2 border-primary rounded px-4 py-2 absolute right-0 -top-5"
						value={search}
						onChange={searchBar}
						placeholder="Cari Barang"
					></input>
				</section>
				<section className="flex justify-center ">
					<table className="table-auto border-2 border-collapse  w-full mx-8 border-black">
						<thead className="text-center bg-primary text-white">
							<th className="p-1 py-2 border-2">No</th>
							<th className="p-1 py-2 border-2">Nama Barang</th>
							<th className="p-1 py-2 border-2">Kode Barang</th>
							<th className="p-1 py-2 border-2">Harga Beli</th>
							<th className="p-1 py-2 border-2">Harga Jual</th>
							<th className="p-1 py-2 border-2">Stok Barang</th>
							<th className="p-1 py-2 border-2">Hapus</th>
							<th className="p-1 py-2 border-2">Edit</th>
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
								{currentPage} | Jumlah Barang : {totalItems}
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

export default GudangPage;
