import NavbarHome from '../components/navbar-home';
import TableKasir from '../components/table-kasir';
import logo_hitam from '../assets/Logo Hitam.png'
import { useEffect, useState } from 'react';
import { BsBasketFill } from 'react-icons/bs';
import { FaCartPlus, FaCheckCircle, FaCheckSquare } from 'react-icons/fa';
import { ImPrinter } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { createDataTransaction, getDataTransaction } from '../redux/reducers/transaction-reducers';
import { getDataProduct } from '../redux/reducers/product-reducers';
import { getDataUser } from '../redux/reducers/user-reducers';

function KasirPage() {
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [showModalPilihBarang, setShowModalPilihBarang] = useState(false);

	const { transactions } = useSelector((state) => state.transaction);
	const { products } = useSelector((state) => state.product);
	const { userSelf } = useSelector((state) => state.user);
	const dispatch = useDispatch()
	// Mendapatkan tanggal hari ini
	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0
	const year = today.getFullYear();
	const formattedDate = `${day}-${month}-${year}`;
	// Mendapatkan product
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [searchBarang, setSearchBarang] = useState('');
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [qty, setQty] = useState('');
	const [cart, setCart] = useState([])
	const [totalBiaya, setTotalBiaya] = useState(0)
	const [bayar, setBayar] = useState('')
	const [kembalian, setKembalian] = useState('')
	const [sudahBayar, setSudahBayar] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const toggleModalPilihBarang = (event) => {
		event.preventDefault()
		setShowModalPilihBarang(!showModalPilihBarang);
	};

	useEffect(() => {
		dispatch(getDataTransaction())
		dispatch(getDataProduct())
		dispatch(getDataUser())
	}, [dispatch])

	// ---Search product---
	useEffect(() => {
		// Filter produk berdasarkan kata kunci pencarian
		const filtered = products.filter((product) =>
			product.nama.toString().toLowerCase().includes(searchBarang.toString().toLowerCase())
			||
			product.kode_barang.toString().toLowerCase().includes(searchBarang.toString().toLowerCase())
		);
		setFilteredProducts(filtered);
	}, [searchBarang, products]);

	// Memindahkan selected products ke cart
	const handleAddCart = () => {
		setCart([
			...cart,
			{
				...selectedProduct,
				qty,
				sub_total: selectedProduct?.harga_jual * qty,
			},
		]);
		setTotalBiaya(totalBiaya + (selectedProduct?.harga_jual * qty))
	};

	const handleSubmitAddCart = (e) => {
		e.preventDefault(); // Prevent default form submission
		handleAddCart();
		setSelectedProduct(null)
		setQty('')
		setSearchBarang('')
	};

	// ---Delete Cart---
	const deleteCart = (id) => {
		const deletedItem = cart.find((item) => item.id === id);

		if (deletedItem) {
			const filterDelete = cart.filter((item) => item.id !== id);
			setCart(filterDelete);
			// Hitung total biaya setelah menghapus elemen dari cart
			const newTotalBiaya = totalBiaya - deletedItem.sub_total;
			// Periksa apakah nilai adalah NaN
			if (!isNaN(newTotalBiaya)) {
				setTotalBiaya(newTotalBiaya);
			} else {
				setTotalBiaya(0);
			}
		}
	};

	// ---Simopan data di Server
	const kirimData = () => {
		const final_cart = cart?.map((item) => ({
			product_id: item.id,
			qty: item.qty, // Use item.qty instead of just qty
			sub_total: item.sub_total, // Use item.sub_total instead of just sub_total
		}));
		const newTransaction = {
			products: final_cart,
			total_biaya: totalBiaya
		}
		dispatch(createDataTransaction(newTransaction))
		//reset state page
		setSelectedProduct(null);
		setSearchBarang('');
		setFilteredProducts([]);
		setQty('');
		setCart([])
		setTotalBiaya(0)
		setBayar('')
		setKembalian('')
		setSudahBayar(false)

		toggleModal()
	}

	// ---Search transactions---
	const searchBar = (e) => {
		setSearch(e.target.value);
		setCurrentPage(1);
	};

	const filteredValue = transactions.filter((item) => {
		if (!search || search === '') {
			return true;
		}
		return (
			item.id
				.toString()
				.toLowerCase()
				.includes(search.toString().toLowerCase())
		);
	});

	// ---Pagination---
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

	// Menampilkan data berdasarkan search
	if (currentValues.length > 0) {
		tableContent = currentValues.map((item, index) => (
			<TableKasir
				key={item.id}
				no={(index + 1) + indexOfLastValue - 8}
				nama={item.products.map((n) => (n.nama))}
				no_trans={item.id}
				quantity={item.products.map((n) => (n.Detail_Transaction.qty))}
				harga={item.products.map((n) => (n.Detail_Transaction.sub_total))}
				total={item.total_biaya}
				tanggal={item.createdAt}
			/>
		));
	} else {
		tableContent = (
			<tbody>
				<tr>
					<td colSpan="8" className="text-center p-4 border-b-2 border-black">
						Data tidak ditemukan
					</td>
				</tr>
			</tbody>
		);
	}

	return (
		<div className="relative flex flex-col items-center w-full h-auto bg-[#F2F4F9] pt-32 pb-12">
			<NavbarHome />
			<main className='w-full max-w-[1200px] px-3 sm:px-8'>
				<section className="grid lg:grid-cols-2 gap-12">
					<div className="w-full flex flex-col ">
						<div className="flex flex-col border border-black rounded-lg bg-white justify-around">
							<div className="w-full relative px-18">
								<p className="text-3xl font-bold m-4 text-center py-2">
									Input Transaksi
								</p>
								<form action="">
									<div className="flex flex-col gap-4">
										<div className="flex gap-4 px-8 w-full items-center ">
											<p className="w-[10em]">Tgl Transaksi</p>
											<input
												type="text"
												disabled
												className="w-full h-8 rounded border bg-gray-200 border-black p-2"
												placeholder="Tanggal Transaksi"
												defaultValue={formattedDate}
											/>
										</div>
										<div className="flex gap-4 px-8 w-full items-center justify-end">
											<p className="w-[10em]">Kode Barang</p>
											<button className="flex w-full h-8 items-center rounded border border-black p-2"
												onClick={toggleModalPilihBarang}>
												{selectedProduct == null ?
													<p className='text-left text-gray-400'>Kode Barang</p>
													:
													<p className='text-left text-gray-700'>{selectedProduct.kode_barang}</p>}
											</button>
										</div>
										<div className="flex gap-4 px-8 w-full items-center justify-end">
											<p className="w-[10em]">Nama Barang</p>
											{selectedProduct == null ?
												<button className="flex w-full h-8 items-center rounded border border-black p-2"
													onClick={toggleModalPilihBarang}>
													<p className='text-left text-gray-400'>Nama Barang</p>
												</button>
												:
												<button className="flex w-full h-fit items-center rounded border border-black p-2"
													onClick={toggleModalPilihBarang}>
													<p className='text-left text-gray-700 overflow-hidden  overflow-ellipsis'>{selectedProduct.nama}</p>
												</button>
											}
										</div>
										<div className="flex gap-4 px-8 w-full items-center justify-end">
											<p className="w-[10em]">Harga</p>
											<input
												type="number"
												disabled
												className="w-full h-8 rounded border bg-gray-200 border-black p-2"
												placeholder="Harga"
												defaultValue={selectedProduct?.harga_jual.toString()}
											/>
										</div>
										<div className="flex gap-4 px-8 w-full items-center">
											<p className="w-[10em]">Quantity</p>
											<div className='w-full'>
												<input
													type="number"
													className="w-full h-8 rounded border border-black p-2"
													placeholder="Quantity"
													min={1}
													max={selectedProduct?.stok}
													value={qty}
													onChange={(e) => {
														const newValue = parseInt(e.target.value);
														if (newValue > 0 && newValue <= selectedProduct?.stok && selectedProduct?.stok > 0) {
															setQty(newValue);
														} else {
															// Nilai tidak valid (mungkin negatif atau melebihi stok), set ke 0 atau sesuai kebutuhan
															setQty('');
														}
													}}
												/>
												{
													selectedProduct && <p className='text-red-500 text-sm'>Maks. qty: {selectedProduct?.stok}</p>
												}
											</div>
										</div>
										<div className="flex gap-4 px-8 w-full items-center justify-end">
											<p className="w-[10em]">Sub Total</p>
											<input
												type="number"
												disabled
												className="w-full h-8 rounded border bg-gray-200 border-black p-2"
												value={selectedProduct ? selectedProduct.harga_jual * qty : 0}
											/>
										</div>
									</div>
								</form>
								<div className='flex w-full justify-end items-end px-8 py-2'>
									<button onClick={handleSubmitAddCart} disabled={qty == '' || sudahBayar ? 'disabled' : ''} className="border-2 p-1 px-4 rounded-lg bg-primary text-white font-bold flex items-center space-x-2">
										<FaCartPlus />
										<p>Tambah ke Nota</p>
									</button>
								</div>
							</div>
							{/* Modal Pilih Barang */}
							<div>
								{showModalPilihBarang && (
									<div className="fixed inset-0 flex items-center justify-center z-10 ">
										<div className="absolute inset-0 bg-black opacity-50"></div>
										<div className="bg-white p-6 rounded z-20 w-[40em] h-[20em] items-center flex flex-col gap-4 relative">
											<button
												className="absolute right-0 top-0 m-5"
												onClick={toggleModalPilihBarang}
											>
												<MdClose className="text-2xl font-bold" />
											</button>
											<h2 className="text-2xl font-bold mt-2 mb-2 text-center text-primary">
												PILIH BARANG
											</h2>
											<input
												type="text"
												className=" border-2 border-black rounded px-8 w-full sm:w-fit py-1 h-fit"
												value={searchBarang}
												onChange={(e) => setSearchBarang(e.target.value)}
												placeholder="Cari Barang">
											</input>
											<div className='w-full overflow-y-auto'>
												{searchBarang == '' ?
													<p>Masukkan kata kunci nama barang atau kode barang</p>
													:
													<ul className='w-full space-y-2'>
														{filteredProducts.map((product) => (
															<li className='w-full bg-gray-100 py-1 px-2 cursor-pointer' key={product.id}
																onClick={() => {
																	setShowModalPilihBarang(false)
																	setSelectedProduct(product)

																}}
															>
																{product.nama}
															</li>
														))}
													</ul>
												}
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="relative">
								<div className="border-b-2 border-black w-full"></div>
								<br />
								<div className="flex flex-col gap-4">
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Bayar</p>
										<input
											type="number"
											disabled={sudahBayar ? 'disabled' : ''}
											className="w-full h-8 rounded border border-black p-2"
											placeholder="Bayar"
											value={bayar}
											onChange={(e) => setBayar(e.target.value)}
										/>
									</div>
									<div className="flex gap-4 px-8 w-full items-center justify-end">
										<p className="w-[10em]">Kembali</p>
										<input
											type="number"
											disabled
											className="w-full h-8 rounded border bg-gray-200 border-black p-2"
											placeholder="Kembali"
											value={kembalian}
										/>
									</div>
								</div>

								<br />
								<br />
								<button onClick={() => { setKembalian(bayar - totalBiaya), setSudahBayar(true) }} disabled={bayar < totalBiaya || cart.length == 0 || sudahBayar ? 'disabled' : ''} className="border-2 p-1 px-4 rounded-lg absolute right-8 bottom-2 mx-auto bg-primary text-white font-bold flex items-center gap-2">
									<BsBasketFill />
									Bayar
								</button>
							</div>
						</div>
					</div>
					{/* Cart */}
					<div className="w-full flex flex-col border border-black rounded-lg bg-white">
						<div className="flex flex-col items-center m-2">
							<img src={logo_hitam} alt="Logo Usaha" className='w-12' />
							<p>UMKM {userSelf?.nama?.toString().toUpperCase()}</p>
							<p>{userSelf?.alamat?.toString()}</p>
						</div>
						<div className="flex justify-end mx-9">
							<p>{formattedDate}</p>
						</div>
						<div className='flex flex-col h-full justify-between space-y-6'>
							<div className="px-8 py-2">
								<table className="w-full border- table-auto table">
									<thead className="border-t-2 border-b-2 border-black">
										<tr>
											<th className="py-1">Nama Barang</th>
											<th className="py-1">Qty</th>
											<th className="py-1">Harga</th>
											<th className="py-1">Subtotal</th>
										</tr>
									</thead>
									<tbody className="text-center ">
										{cart?.map((item, index) => (
											<tr key={index}>
												<td className="flex text-left items-center space-x-1">
													{sudahBayar == false ?
														<button onClick={() => deleteCart(item.id)} className='bg-primary text-white px-0.5 py-0.5 rounded-md'>
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg>
														</button>
														:
														''
													}
													<p>{item.nama}</p>
												</td>
												<td>{item.qty}</td>
												<td>{item.harga_jual}</td>
												<td className="text-right">{item.sub_total}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							{/* <div className="absolute bottom-12 w-full px-10"> */}
							<div className="w-full px-8">
								<div className="border-b-2 border-black"></div>
								<div className="flex justify-between">
									<div>
										<p>Total</p>
										<p>Bayar</p>
										<p>Kembalian</p>
									</div>
									<div className="text-right">
										<p>{totalBiaya}</p>
										<p>{bayar == '' ? 0 : bayar}</p>
										<p>{kembalian == '' ? 0 : kembalian}</p>
									</div>
								</div>
								<div className="text-center font-bold">
									*** TERIMAKASIH TELAH BERBELANJA ***
								</div>
							</div>
						</div>
						<div className="justify-end mx-6 my-2 flex gap-2">
							{/* <button className="flex border bg-primary text-white font-bold gap-2 px-4 py-1 rounded-lg items-center">
								<ImPrinter />
							</button> */}
							<button
								disabled={bayar < totalBiaya || cart.length == 0 || !sudahBayar ? 'disabled' : ''}
								className="flex border bg-primary text-white font-bold gap-2 px-4 py-1 rounded-lg items-center"
								onClick={kirimData}
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
				<section className="w-full ">
					<div className='rounded-t-lg px-4 sm:px-8 pb-8 border bg-white border-t-black border-x-black h-auto lg:overflow-hidden'>
						<div className='grid grid-cols-1 sm:grid-cols-2 justify-center sm:justify-between items-center'>
							<h1 className="text-center sm:text-left text-2xl my-4 font-bold">
								Laporan Transaksi
							</h1>
							<div className='flex justify-start sm:justify-end mb-4 sm:mb-0'>
								<input
									type="text"
									className=" border-2 border-black rounded px-8  sm:w-fit py-1 h-fit"
									value={search}
									onChange={searchBar}
									placeholder="Cari Nomor Transaksi"
								></input>
							</div>

						</div>
						<div className='flex flex-col h-full justify-between space-y-9 '>
							<div className='overflow-x-auto'>
								<div className="w-[800px] md:w-full  flex justify-center">
									<table className="table-auto border-collapse w-full border-r-2 border-l-2 border-black">
										<thead className="text-center bg-primary text-white ">
											<tr>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													No
												</th>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													No Transaksi
												</th>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													Nama Barang
												</th>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													Quantity
												</th>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													Sub Total
												</th>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													Total
												</th>
												<th className="px-2 py-2 border-t-2 border-b-2 border-black">
													Tanggal
												</th>
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
	);
}

export default KasirPage;
