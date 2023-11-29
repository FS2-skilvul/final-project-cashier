import NavbarHome from '../components/navbar-home';
import TableKasir from '../components/table-kasir';
import { useState } from 'react';
import { BsBasketFill } from 'react-icons/bs';
import { FaCartPlus, FaCheckCircle, FaCheckSquare } from 'react-icons/fa';
import { ImPrinter } from 'react-icons/im';
import { MdClose } from 'react-icons/md';

function KasirPage() {
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
			<TableKasir
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
		<div className="relative w-full h-full bg-[#F2F4F9] pt-20 pb-12">
			<NavbarHome />
			<main>
				<section className="flex">
					<div className="w-1/2 flex flex-col ">
						<div className="flex flex-col border border-black mx-8 my-8 rounded-lg bg-white justify-around">
							<div className="w-full relative px-18">
								<p className="text-3xl font-bold m-4 text-center py-2">
									Input Transaksi
								</p>
								<div className="flex flex-col gap-4">
									<div className="flex gap-4 px-8 w-full items-center ">
										<p className="w-[10em]">Tgl Transaksi :</p>
										<input
											type="text"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Tanggal Transaksi"
											value=""
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Kode Barang :</p>
										<input
											type="text"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Kode Barang"
											value=""
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Nama Barang :</p>
										<input
											type="text"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Nama Barang"
											value=""
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Harga :</p>
										<input
											type="number"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Harga"
											value=""
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Quantity :</p>
										<input
											type="number"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Quantity"
											value=""
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Jumlah :</p>
										<input
											type="number"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Jumlah"
											value=""
										/>
									</div>
								</div>
								<button className="border-2 p-1 px-4 rounded-lg absolute right-8 bottom-2 mx-auto bg-primary text-white font-bold flex items-center gap-2">
									<FaCartPlus />
									Tambah ke Nota
								</button>
								<br />
								<br />
							</div>
							<div className="relative">
								<div className="border-b-2 border-black w-full"></div>
								<br />
								<div className="flex flex-col gap-4">
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Bayar :</p>
										<input
											type="number"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Bayar"
											value=""
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Kembali :</p>
										<input
											type="number"
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Kembali"
											value=""
										/>
									</div>
								</div>

								<br />
								<br />
								<button className="border-2 p-1 px-4 rounded-lg absolute right-8 bottom-2 mx-auto bg-primary text-white font-bold flex items-center gap-2">
									<BsBasketFill />
									Bayar
								</button>
							</div>
						</div>
					</div>
					<div className="relative w-1/2 flex flex-col border border-black mx-8 my-8 rounded-lg bg-white">
						<div className="flex flex-col items-center m-2">
							<img src="" alt="Logo Usaha" />
							<p>Nama Usaha</p>
							<p>Alamat</p>
						</div>
						<div className="flex justify-between mx-12">
							<p>Tanggal</p>
							<p>Waktu</p>
						</div>
						<div className="px-8 py-2">
							<table className="w-full border- table-fixed table">
								<thead className="border-t-2 border-b-2 border-black">
									<th className="py-1 w-3/6">Nama Barang</th>
									<th className="py-1 w-1/6">Qty</th>
									<th className="py-1 w-1/6">Harga</th>
									<th className="py-1 w-1/6">Subtotal</th>
								</thead>
								<tbody className="text-center ">
									<td className="text-left">halo</td>
									<td>halo</td>
									<td>halo</td>
									<td className="text-right">Rp. 5</td>
								</tbody>
							</table>
						</div>
						<div className="absolute bottom-12 w-full px-10">
							<div className="border-b-2 border-black"></div>
							<div className="flex justify-between">
								<div>
									<p>Total</p>
									<p>Bayar</p>
									<p>Kembalian</p>
								</div>
								<div className="text-right">
									<p>0</p>
									<p>0</p>
									<p>0</p>
								</div>
							</div>
							<div className="text-center font-bold">
								*** TERIMAKASIH TELAH BERBELANJA ***
							</div>
						</div>
						<div className="absolute bottom-0 right-0 mx-6 my-2 flex gap-2">
							<button className="flex border bg-primary text-white font-bold gap-2 px-4 py-1 rounded-lg items-center">
								<ImPrinter />
							</button>
							<button
								className="flex border bg-primary text-white font-bold gap-2 px-4 py-1 rounded-lg items-center"
								onClick={toggleModal}
							>
								<FaCheckSquare /> Selesai
							</button>
						</div>
					</div>
					<div className="relative">
						{showModal && (
							<div className="fixed inset-0 flex items-center justify-center z-10 ">
								<div className="absolute inset-0 bg-black opacity-50"></div>
								<div className="bg-white p-6 rounded z-20 w-[40em] h-[20em] items-center flex flex-col justify-center gap-4 relative">
									<button
										className="absolute right-0 top-0 m-5"
										onClick={toggleModal}
									>
										<MdClose className="text-2xl font-bold" />
									</button>
									<div className="flex justify-center">
										<FaCheckCircle className="text-8xl text-center m-2 fill-primary" />
									</div>
									<h2 className="text-2xl font-bold mb-2 text-center text-primary">
										PEMBAYARAN BERHASIL
									</h2>
									<div className="flex justify-center">
										<button
											onClick={toggleModal}
											className="border-blue-500 hover:bg-blue-700 text-primary font-bold py-2 px-16 rounded mt-4 border-2"
										>
											OK
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</section>
				<section className="border border-black mx-8 rounded-lg relative h-[36em]">
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
		</div>
	);
}

export default KasirPage;
