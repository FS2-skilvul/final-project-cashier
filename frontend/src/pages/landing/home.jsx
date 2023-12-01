import React from 'react';
import NavbarLanding from '../../components/navbar-landing';
import foto from '../../assets/unsplash_ONlW_Ye8HcQ.png';
import logoKecil from '../../assets/Vector (2).png';
import { Link } from 'react-router-dom';

function LandingHome() {
	return (
		<>
			<NavbarLanding />
			<main className="w-screen justify-center mt-[4.5rem] lg:flex lg:flex-row px-8">
				<section className="flex justify-center flex-col items-center">
					<div className="font-semibold text-center">
						<div className="flex flex-col my-4 text-3xl items-center md:text-5xl md:space-y-2 font-bold">
							<p>Kelola Usaha Anda</p>
							<p>Dengan Aplikasi</p>
							<span className="font-bold text-primary">Kasir Online </span>
						</div>
						<p className="text-lg mx-4 my-2">
							Kami membantu Anda mendapatkan data-data menarik dari transaksi
							Anda sehingga Anda bisa menjual lebih banyak lagi.
						</p>
					</div>
					<Link to={'/login'}>
						<button className="text-sm md:text-lg text-white font-bold border rounded-full bg-primary px-6 py-2 mt-2">
							Pelajari Lebih Lanjut
						</button>
					</Link>
				</section>
				<section className="flex justify-center items-center">
					<img
						src={foto}
						alt="Ini Gambar"
						className="w-[75%] md:w-[80%] lg:w-[95%] items-center justify-center md:m-10 m-8"
					/>
				</section>
			</main>
			<footer className=" bg-primary py-10 px-12 md:py-6 text-white text-justify flex flex-col">
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
		</>
	);
}

export default LandingHome;
