import { useState } from 'react';
import NavbarHome from '../components/navbar-home';
import TableGudang from '../components/table-gudang';

function GudangPage() {
	const [value, setValue] = useState([
		{
			no: 1,
			nama: 1,
			kode: 1,
			beli: 1,
			jual: 1,
			stok: 1,
			id: 1,
		},
		{
			no: 2,
			nama: 2,
			kode: 2,
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

	return (
		<>
			<NavbarHome />
			<main className="flex flex-col h-[80vh] w-[125vh] m-auto mt-6 bg-secondary border shadow-xl border-primary rounded">
				<header className="flex justify-center">Daftar Barang</header>
				<section className="flex flex-row justify-around ">
					<button>Tambah Barang</button>
					<button>Search</button>
				</section>
				<section className="flex justify-center">
					<table className="table-auto border-2 border-collapse border-slate-500">
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
						{value.map((value) => (
							<TableGudang
								no={value.no}
								nama={value.nama}
								kode={value.kode}
								beli={value.beli}
								jual={value.jual}
								stok={value.stok}
								id={value.id}
							/>
						))}
					</table>
				</section>
				<footer>Lalalala</footer>
			</main>
		</>
	);
}

export default GudangPage;
