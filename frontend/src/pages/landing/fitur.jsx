import React from 'react';
import NavbarLanding from '../../components/navbar-landing';
import ContainerFitur from '../../components/container-fitur';
import ImgDashboard from '../../assets/Businesswoman using a tablet to analysis graph company finance strategy statistics success concept and planning for future in office room.png';
import ImgGudang from '../../assets/Interior of large distribution warehouse with shelves stacked with palettes and goods ready for the market.png';
import ImgKasir from '../../assets/Close up on education and economy objects.png';
import logoKecil from '../../assets/Vector (2).png';

function LandingFitur() {
	return (
		<>
			<NavbarLanding />
			<main className="pt-4 z-1">
				<div className="flex flex-col  justify-center mt-[4.5rem] items-center">
					<h1 className="text-5xl font-bold text-center">
						FITUR UTAMA{' '}
						<span className="text-5xl font-bold text-primary">
							Kasir Online
						</span>
					</h1>
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center mt-2">
					<ContainerFitur
						image={ImgDashboard}
						title="Dashboard"
						description="Fitur dashboard ini adalah titik awal pengguna dalam mengelola bisnis mereka. Dashboard akan menampilkan ringkasan visual tentang pendapatan, pengeluaran, stok barang, dan laporan penting lainnya. Pengguna dapat dengan cepat melihat performa bisnis mereka dalam satu pandangan, memantau tren, dan mengambil keputusan berdasarkan data real-time."
					/>
					<ContainerFitur
						image={ImgGudang}
						title="Gudang"
						description="Fitur Gudang membantu pengguna melacak masuknya barang ke gudang mereka. Mereka dapat memasukkan informasi mengenai penerimaan barang, jumlah stok yang tersedia, dan lokasi penyimpanan. Hal ini membantu pengguna untuk memahami dengan jelas jumlah stok barang yang tersedia, menghindari kehabisan stok, dan mengoptimalkan manajemen persediaan."
					/>
					<ContainerFitur
						image={ImgKasir}
						title="Kasir"
						description="Fitur Kasir memungkinkan pengguna untuk melakukan transaksi penjualan dengan mudah dan akurat. Mereka dapat menghitung harga barang, mengelola inventaris stok, mencetak nota penjualan, dan menerima berbagai metode pembayaran. Fitur ini dirancang untuk meminimalkan kesalahan perhitungan harga barang dan meningkatkan kecepatan proses penjualan."
					/>
				</div>
			</main>
			<footer></footer>
		</>
	);
}

export default LandingFitur;
