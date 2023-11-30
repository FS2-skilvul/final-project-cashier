import TableKasirAdmin from '../../components/table-kasir-admin';
import { useState } from 'react';
import NavbarAdmin from '../../components/navbar-admin';
import { Link } from 'react-router-dom';
Link;

function AdminTransaksi() {
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};
	const [value, setValue] = useState([
		{
			no: 1,
			no_trans: '#123',
			nama: 'Minyak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 1,
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
		},
		{
			no: 1,
			no_trans: 'wefwef3',
			nama: 'Mwefwefak',
			quantity: 45.0,
			harga: 1,
			total: 1,
			tanggal: 'wefwefwe',
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
			item.no_trans
				.toString()
				.toLowerCase()
				.includes(search.toString().toLowerCase()) ||
			item.tanggal
				.toString()
				.toLowerCase()
				.includes(search.toString().toLowerCase()) ||
			item.nama
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
			<TableKasirAdmin
				key={item.no}
				no={item.no}
				nama={item.nama}
				no_trans={item.no_trans}
				quantity={item.quantity}
				harga={item.harga}
				total={item.total}
				tanggal={item.tanggal}
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
		<div className="w-full h-screen bg-[#F2F4F9] pt-20 pb-12">
			<NavbarAdmin />
			<main className="relative">
				<section className="border border-black mx-8 rounded-lg relative h-[36em] my-10">
					<div>
						<h1 className="text-left ml-10 text-2xl m-4 font-bold">
							Laporan Transaksi
						</h1>
						<input
							type="text"
							className="border-2 border-black rounded px-8 py-1 absolute right-8
							 top-4"
							value={search}
							onChange={searchBar}
							placeholder="Cari Transaksi"
						></input>
					</div>
					<section className="flex justify-center">
						<table className="table-auto border-collapse w-full mx-8 border-r-2 border-l-2 border-black">
							<thead className="text-center bg-primary text-white ">
								<th className="p-2 py-2 border-t-2 border-b-2 border-black w-1/12">
									No
								</th>
								<th className="p-1 py-2 border-t-2 border-b-2 border-black w-2/12">
									No Transaksi
								</th>
								<th className="p-1 py-2 border-t-2 border-b-2 border-black w-5/12">
									Nama Barang
								</th>
								<th className="p-1 py-2 border-t-2 border-b-2 border-black w-1/12">
									Quantity
								</th>
								<th className="p-1 py-2 border-t-2 border-b-2 border-black w-1/12">
									Harga
								</th>
								<th className="p-1 py-2 border-t-2 border-b-2 border-black w-1/12">
									Total
								</th>
								<th className="p-1 py-2 border-t-2 border-b-2 border-black w-1/12">
									Tanggal
								</th>
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
				</section>
			</main>
			<div className="absolute bottom-0 right-0 m-20">
				<Link to={'/admin-dashboard'}>
					<button className="text-white flex bg-primary p-4 rounded-full items-center font-bold text-xl gap-4">
						<svg
							width="33"
							height="33"
							viewBox="0 0 33 33"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M13.583 1.91667C13.5833 1.61253 13.4885 1.31592 13.3118 1.06834C13.1352 0.820763 12.8856 0.634608 12.5979 0.535928C12.3102 0.437248 11.9989 0.43098 11.7074 0.518003C11.416 0.605025 11.1591 0.780983 10.9726 1.02125L0.764293 14.1462C0.565151 14.4022 0.457031 14.7173 0.457031 15.0417C0.457031 15.366 0.565151 15.6811 0.764293 15.9371L10.9726 29.0621C11.1591 29.3024 11.416 29.4783 11.7074 29.5653C11.9989 29.6524 12.3102 29.6461 12.5979 29.5474C12.8856 29.4487 13.1352 29.2626 13.3118 29.015C13.4885 28.7674 13.5833 28.4708 13.583 28.1667V22.3479C21.4274 22.5113 25.1958 24.0002 27.0887 25.619C28.8883 27.1575 29.2178 28.9673 29.5605 30.8631L29.6495 31.3517C29.7149 31.7012 29.9059 32.0149 30.1864 32.2335C30.4669 32.4521 30.8176 32.5608 31.1726 32.5389C31.5276 32.517 31.8623 32.3662 32.1139 32.1148C32.3654 31.8634 32.5164 31.5287 32.5385 31.1738C32.7878 27.1663 32.413 21.3592 29.5824 16.5015C26.8349 11.7867 21.8883 8.16125 13.583 7.78208V1.91667Z"
								fill="white"
							/>
						</svg>
						Kembali
					</button>
				</Link>
			</div>
		</div>
	);
}

export default AdminTransaksi;
