import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getDataProduct } from '../../redux/reducers/product-reducers';
import NavbarAdmin from './../../components/navbar-admin';
import TableGudangAdmin from '../../components/table-gudang-admin';
// import { useParams } from 'react-router-dom';

function AdminGudang() {
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	// const { id } = useParams();
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
			<TableGudangAdmin
				key={item.id}
				no={index + 1}
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
			<tbody>
				<tr>
					<td colSpan="8" className="text-center p-4">
						Data tidak ditemukan
					</td>
				</tr>
			</tbody>
		);
		console.log(tableContent);
	}

	return (
		<div className="relative w-full h-screen bg-[#F2F4F9] pt-20 pb-12">
			<NavbarAdmin />
			<main className="relative h-[36em] w-[65em] m-auto mt-8 bg-secondary border shadow-xl border-primary rounded">
				<header className="flex justify-start w-full h-[8%] bg-primary items-center">
					<p className="ml-8 font-bold text-white text-xl">Daftar Barang</p>
				</header>
				<section className="flex flex-row justify-between relative m-8">
					<Link to={'/gudang/tambah'}>
						<button className="border-2 border-primary rounded px-4 py-2 absolute left-0 -top-5 bg-green-500 hover:bg-green-600 flex items-center gap-2 font-bold text-white">
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
					<table className="table-auto border-2 border-collapse  w-full mx-8">
						<thead className="text-center bg-primary text-white">
							<tr>
								<th className="p-1 py-2 border-2">No</th>
								<th className="p-1 py-2 border-2">Nama Barang</th>
								<th className="p-1 py-2 border-2">Kode Barang</th>
								<th className="p-1 py-2 border-2">Harga Beli</th>
								<th className="p-1 py-2 border-2">Harga Jual</th>
								<th className="p-1 py-2 border-2">Stok Barang</th>
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

export default AdminGudang;
