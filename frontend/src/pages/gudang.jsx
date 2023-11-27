import { useState } from 'react';
import NavbarHome from '../components/navbar-home';
import TableGudang from '../components/table-gudang';

function GudangPage() {
	const [search, setSearch] = useState('');
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
			no: 2,
			nama: 'Ganja',
			kode: '#987',
			beli: 2,
			jual: 2,
			stok: 2,
			id: 2,
		},
		{
			no: 3,
			nama: 3,
			kode: 3,
			beli: 3,
			jual: 3,
			stok: 3,
			id: 3,
		},
		{
			no: 4,
			nama: 4,
			kode: 4,
			beli: 4,
			jual: 4,
			stok: 4,
			id: 4,
		},
		{
			no: 5,
			nama: 5,
			kode: 5,
			beli: 5,
			jual: 5,
			stok: 5,
			id: 5,
		},
		{
			no: 6,
			nama: 6,
			kode: 6,
			beli: 6,
			jual: 6,
			stok: 6,
			id: 6,
		},
		{
			no: 7,
			nama: 7,
			kode: 7,
			beli: 7,
			jual: 7,
			stok: 7,
			id: 7,
		},
		{
			no: 8,
			nama: 8,
			kode: 8,
			beli: 8,
			jual: 8,
			stok: 8,
			id: 8,
		},
	]);

	const searchBar = (e) => {
		setSearch(e.target.value);
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

	let tableContent;

	if (filteredValue.length > 0) {
		tableContent = filteredValue.map((item) => (
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
		<>
			<NavbarHome />
			<main className="relative h-[80vh] w-[125vh] m-auto mt-6 bg-secondary border shadow-xl border-primary rounded">
				<header className="flex justify-start w-full h-[8%] bg-primary items-center">
					<p className="ml-8 font-bold text-white text-xl">Daftar Barang</p>
				</header>
				<section className="flex flex-row justify-between relative m-8">
					<button className="border-2 border-primary rounded px-4 py-2 absolute left-0 -top-5 bg-green-500">
						Tambah Barang
					</button>
					<input
						type="text"
						className="border-2 border-primary rounded px-4 py-2 absolute right-0 -top-5"
						value={search}
						onChange={searchBar}
					></input>
				</section>
				<section className="flex justify-center ">
					<table className="table-auto border-2 border-collapse border-slate-500 w-full mx-8">
						<thead className="text-center">
							<th className="p-1 border-2">No</th>
							<th className="p-1 border-2">Nama Barang</th>
							<th className="p-1 border-2">Kode Barang</th>
							<th className="p-1 border-2">Harga Beli</th>
							<th className="p-1 border-2">Harga Jual</th>
							<th className="p-1 border-2">Stok Barang</th>
							<th className="p-1 border-2">Hapus</th>
							<th className="p-1 border-2">Edit</th>
						</thead>
						{tableContent}
					</table>
				</section>
				<footer className="flex justify-center bg-primary absolute bottom-0 w-full h-[8%]">
					<section className="relative w-full flex items-center">
						<div className="border-2 border-secondary rounded absolute left-5 p-1 bg-white px-2">
							<button>Tombol</button>
						</div>
						<div className="border-2 border-secondary rounded absolute right-5 p-1 bg-white px-2">
							<button>Tombol</button>
						</div>
					</section>
				</footer>
			</main>
		</>
	);
}

export default GudangPage;
