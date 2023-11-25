import React from 'react';
import NavbarLanding from '../../components/navbar-landing';
import foto from '../../assets/unsplash_ONlW_Ye8HcQ.png';

function LandingHome() {
	return (
		<div>
			<NavbarLanding />
			<main className="w-screen h-[87.5vh] flex justify-center flex-col md:flex-row">
				<section className="flex w-1/2 justify-center items-center px-12">
					<div className="text-7xl font-semibold ml-20">
						<p className="my-4">Kelola Usaha Anda</p>
						<p className="my-4">Dengan Aplikasi</p>
						<p className="my-4 font-bold text-primary">Kasir Online</p>
						<p className="text-lg pr-48">
							Kami membantu Anda mendapatkan data-data menarik dari transaksi
							Anda sehingga Anda bisa menjual lebih banyak lagi.
						</p>
						<a className="text-lg font-bold" href="">
							Pelajari Lebih Lanjut
						</a>
					</div>
				</section>
				<section className="flex w-1/2 justify-center items-center">
					<img
						src={foto}
						alt="Ini Gambar"
						className="w-[80%] items-center justify-center"
					/>
				</section>
			</main>
			<footer className="w-screen bg-primary p-4 px-12 text-white text-justify absolute bottom-0">
				<p>
					<b>KasirOnline</b> merupakan solusi pembukuan dan manajemen bisnis
					digital yang akan membantu pengguna mengelola bisnis mereka dengan
					lebih efisien, mengurangi kesalahan dalam perhitungan, meningkatkan
					keamanan data, dan meningkatkan pemahaman tentang manfaat teknologi.
					Solusi ini akan mudah digunakan oleh berbagai tingkat keterampilan
					teknologi dan fleksibel dalam menyesuaikan dengan kebutuhan bisnis
					individu.
				</p>
			</footer>
		</div>
	);
}

export default LandingHome;
