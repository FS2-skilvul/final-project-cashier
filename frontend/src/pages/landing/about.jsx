import React from 'react';
import NavbarLanding from '../../components/navbar-landing';
import logoPutih from '../../assets/logo.png';
import { IoMapSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

function LandingAbout() {
	return (
		<div className="">
			<NavbarLanding />
			<main className="flex flex-col items-center w-screen h-[85vh]">
				<h1 className="font-bold text-5xl my-48">#solusiuntukUMKManda</h1>
				<div className="flex bg-primary p-8 h-full items-center">
					<section className="flex flex-col w-3/5 mx-8 text-secondary text-2xl px-24 justify-center">
						<div className="flex ">
							<img
								src={logoPutih}
								alt="logo kasir online"
								className="object-contain"
							/>
							<p className="py-4 px-8 ">
								KasirOnline merupakan solusi pembukuan dan manajemen bisnis
								digital yang akan membantu pengguna mengelola bisnis mereka
								dengan lebih efisien,{' '}
							</p>
						</div>
						<p className="py-2 leading-10">
							mengurangi kesalahan dalam perhitungan, meningkatkan keamanan
							data, dan meningkatkan pemahaman tentang manfaat teknologi. Solusi
							ini akan mudah digunakan oleh berbagai tingkat keterampilan
							teknologi dan fleksibel dalam menyesuaikan dengan kebutuhan bisnis
							individu.
						</p>
					</section>
					<section className="w-1/5 font-bold text-2xl text-secondary">
						<div>
							<li className="py-2">
								<a href="/">Home</a>
							</li>
							<li className="py-2">
								<a href="/fitur">Fitur</a>
							</li>
							<li className="py-2">
								<a href="/about">Tentang Kami</a>
							</li>
							<li className="py-2">
								<a href="/sk">Syarat & Ketentuan</a>
							</li>
							<li className="py-2">
								<a href="/kp">Kebijakan Privasi</a>
							</li>
							<li className="py-2">
								<a href="/bantuan">Bantuan</a>
							</li>
						</div>
					</section>
					<section className="w-1/5 text-2xl">
						<div className="text-secondary">
							<h3>Hubungi Kami</h3>
							<div className="flex items-center my-4">
								<IoMapSharp className="mr-4" />
								<p className="w-5/6">
									Jalan Indonesia Raya Kec. Indo Kel. Ind 76123
								</p>
							</div>
							<div className="flex items-center my-4">
								<MdEmail className="mr-4" />
								<p className="w-5/6">kasironline@hotline.co.id</p>
							</div>
							<div className="flex items-center my-4 ">
								<FaPhoneAlt className="mr-4" />
								<p className="w-5/6">0812 3456 7890</p>
							</div>
							<div className="">
								<h1>Ikuti Kami</h1>
								<div className="flex my-4 gap-4">
									<a href="">
										<FaFacebook />
									</a>
									<a href="">
										<FaInstagram />
									</a>
									<a href="">
										<FaTwitter />
									</a>
									<a href="">
										<FaTiktok />
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
			<footer className="flex justify-center my-auto h-20 items-center font-bold">
				© Copyright kasironline.com. All Rights Reserved Designed by Ilham -
				Diqi - Fatikhah
			</footer>
		</div>
	);
}

export default LandingAbout;
