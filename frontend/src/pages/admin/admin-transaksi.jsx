import TableKasirAdmin from '../../components/table-kasir-admin';
import { useEffect, useState } from 'react';
import NavbarAdmin from '../../components/navbar-admin';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataTransaction } from '../../redux/reducers/transaction-reducers';

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
	const { allTransaction } = useSelector((state) => state.transaction);
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			try {
				dispatch(getAllDataTransaction(id));
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
				navigate('/admin-dashboard');
			}
		} else {
			navigate('/admin-dashboard');
		}
	}, [dispatch, id]);

	const searchBar = (e) => {
		setSearch(e.target.value);
		setCurrentPage(1);
	};

	const filteredValue = allTransaction.filter((item) => {
		if (!search || search === '') {
			return true;
		}
		return item.id
			.toString()
			.toLowerCase()
			.includes(search.toString().toLowerCase());
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
		tableContent = currentValues.map((item, index) => (
			<TableKasirAdmin
				key={item.id}
				no={index + 1 + indexOfLastValue - 8}
				nama={item.products.map((n) => n.nama)}
				no_trans={item.id}
				quantity={item.products.map((n) => n.Detail_Transaction.qty)}
				harga={item.products.map((n) => n.Detail_Transaction.sub_total)}
				total={item.total_biaya}
				tanggal={item.createdAt}
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
		<div className="relative flex flex-col items-center w-screen h-screen bg-[#F2F4F9] px-3">
			<NavbarAdmin />
			<div className="flex h-auto w-full justify-center bg-[#F2F4F9]">
				<div className="h-auto rounded-lg w-full lg:w-[1040px] pt-28 bg-[#F2F4F9]">
					<main className="w-full max-w-[65em] h-auto pb-9">
						<section className="w-full h-full border rounded-lg">
							<div className="flex justify-center md:justify-start w-full py-2 bg-primary items-center rounded-t-lg border-t border-x border-black">
								<p className="ml-8 font-bold text-white text-xl">
									LAPORAN TRANSAKSI
								</p>
							</div>
							<div className="px-4 sm:px-8 pb-8 border bg-white border-t-black border-x-black h-full">
								<div className="flex w-full justify-start sm:justify-between items-center py-3">
									<div className="bg-red-500 rounded-lg hover:bg-red-600 mr-2">
										<Link
											to={'/admin-dashboard'}
											className="flex items-center px-4 py-2 sm:py-1 rounded-lg text-white space-x-2"
										>
											<svg
												width="20"
												height="20"
												viewBox="0 0 33 33"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.583 1.91667C13.5833 1.61253 13.4885 1.31592 13.3118 1.06834C13.1352 0.820763 12.8856 0.634608 12.5979 0.535928C12.3102 0.437248 11.9989 0.43098 11.7074 0.518003C11.416 0.605025 11.1591 0.780983 10.9726 1.02125L0.764293 14.1462C0.565151 14.4022 0.457031 14.7173 0.457031 15.0417C0.457031 15.366 0.565151 15.6811 0.764293 15.9371L10.9726 29.0621C11.1591 29.3024 11.416 29.4783 11.7074 29.5653C11.9989 29.6524 12.3102 29.6461 12.5979 29.5474C12.8856 29.4487 13.1352 29.2626 13.3118 29.015C13.4885 28.7674 13.5833 28.4708 13.583 28.1667V22.3479C21.4274 22.5113 25.1958 24.0002 27.0887 25.619C28.8883 27.1575 29.2178 28.9673 29.5605 30.8631L29.6495 31.3517C29.7149 31.7012 29.9059 32.0149 30.1864 32.2335C30.4669 32.4521 30.8176 32.5608 31.1726 32.5389C31.5276 32.517 31.8623 32.3662 32.1139 32.1148C32.3654 31.8634 32.5164 31.5287 32.5385 31.1738C32.7878 27.1663 32.413 21.3592 29.5824 16.5015C26.8349 11.7867 21.8883 8.16125 13.583 7.78208V1.91667Z"
													fill="currentColor"
												/>
											</svg>
											<p className="font-bold hidden sm:flex">Kembali</p>
										</Link>
									</div>
									<div className="flex w-full justify-start sm:justify-end">
										<input
											type="text"
											className=" border-2 border-primary rounded px-3 sm:px-8 w-full sm:w-fit py-1 h-fit"
											value={search}
											onChange={searchBar}
											placeholder="Cari Nomor Transaksi"
										></input>
									</div>
								</div>
								<div className="flex flex-col h-full justify-between space-y-9 ">
									<div className="overflow-x-auto">
										<div className="w-[900px] md:w-full  flex justify-center">
											<table className="table-auto border-collapse w-full border-r-2 border-l-2 border-b-2">
												<thead className="text-center bg-primary text-white ">
													<tr>
														<th className="px-2 py-2 border-2">No</th>
														<th className="px-2 py-2 border-2">No Transaksi</th>
														<th className="px-2 py-2 border-2">Nama Barang</th>
														<th className="px-2 py-2 border-2">Quantity</th>
														<th className="px-2 py-2 border-2">Sub Total</th>
														<th className="px-2 py-2 border-2">Total</th>
														<th className="px-2 py-2 border-2">Tanggal</th>
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
									<div className="w-full">
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

export default AdminTransaksi;
