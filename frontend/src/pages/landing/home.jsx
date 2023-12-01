import React from 'react';
import NavbarLanding from '../../components/navbar-landing';
import foto from '../../assets/unsplash_ONlW_Ye8HcQ.png';
import { Link } from 'react-router-dom';

function LandingHome() {
	return (
		<>
			<NavbarLanding />
			<main className="flex flex-col min-h-screen">
				<div className="w-screen lg:h-[80vh] justify-center mt-[4.5rem] lg:flex lg:flex-row px-8 flex-1 ">
					<section className="flex justify-center flex-col items-center">
						<div className="font-semibold text-center">
							<div className="flex flex-col my-6 text-3xl items-center md:text-4xl md:space-y-2 font-bold lg:text-7xl">
								<p className="md:mx-10 xl:mx-12">
									Kelola Usaha Anda Dengan Aplikasi
									<span className="font-bold text-primary"> Kasir Online</span>
								</p>
							</div>
							<p className="text-lg mx-4 my-2 lg:text-xl lg:mx-12 xl:mx-48">
								Kami membantu Anda mendapatkan data-data menarik dari transaksi
								Anda sehingga Anda bisa menjual lebih banyak lagi.
							</p>
						</div>
						<Link to={'/login'}>
							<button className="text-sm md:text-md text-white font-bold border rounded-full bg-primary px-6 py-2 mt-2">
								Pelajari Lebih Lanjut
							</button>
						</Link>
					</section>
					<section className="flex justify-center items-center lg:w-1/2">
						<img
							src={foto}
							alt="Ini Gambar"
							className="w-[70%] md:w-[75%] lg:w-[95%] items-center justify-center md:m-6 m-4 object-fill "
						/>
					</section>
				</div>
				<div className="flex">
					<footer className=" bg-primary py-10 px-12 md:py-6 text-white text-justify mt-4">
						<p className="">
							<b>KasirOnline</b> merupakan solusi pembukuan dan manajemen bisnis
							digital yang akan membantu pengguna mengelola bisnis mereka dengan
							lebih efisien, mengurangi kesalahan dalam perhitungan,
							meningkatkan keamanan data, dan meningkatkan pemahaman tentang
							manfaat teknologi. Solusi ini akan mudah digunakan oleh berbagai
							tingkat keterampilan teknologi dan fleksibel dalam menyesuaikan
							dengan kebutuhan bisnis individu.
						</p>
					</footer>
				</div>
			</main>
		</>
	);
}

export default LandingHome;
