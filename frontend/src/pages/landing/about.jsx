import React from 'react';
import NavbarLanding from '../../components/navbar-landing';
import logoPutih from '../../assets/logo.png';
import { IoMapSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LandingAbout() {
	return (
		<div className="">
			<NavbarLanding />
			<main className="flex flex-col items-center w-screen h-full">
				<h1 className="font-bold text-3xl my-96 animate-pulse md:my-52">
					#solusiuntukUMKManda
				</h1>
				<div className=" bg-primary h-full items-center justify-center md:flex ">
					<div className="m-8 md:w-1/2">
						<img
							src={logoPutih}
							alt="logo kasir online"
							className="w-[50%] lg:w-[25%] mx-auto mb-8"
						/>
						<p className="text-justify text-white text-md">
							KasirOnline merupakan solusi pembukuan dan manajemen bisnis
							digital yang akan membantu pengguna mengelola bisnis mereka dengan
							lebih efisien, mengurangi kesalahan dalam perhitungan,
							meningkatkan keamanan data, dan meningkatkan pemahaman tentang
							manfaat teknologi. Solusi ini akan mudah digunakan oleh berbagai
							tingkat keterampilan teknologi dan fleksibel dalam menyesuaikan
							dengan kebutuhan bisnis individu.
						</p>
					</div>
					<div className="flex flex-row m-8 items-center md:w-1/2">
						<section className="flex flex-col text-secondary w-1/2 gap-3 m-2">
							<Link to="/">Home</Link>
							<Link to="/fitur">Fitur</Link>
							<Link to="/about">Tentang Kami</Link>
							<Link to="/sk">Syarat dan Ketentuan</Link>
							<Link to="/kp">Kebijakan Privasi</Link>
							<Link to="/bantuan">Bantuan</Link>
						</section>
						<section className="w-1/2 m-2">
							<div className="text-secondary flex flex-col gap-1">
								<h3 className="font-bold">Hubungi Kami</h3>
								<div className="flex items-center">
									<IoMapSharp className="mr-4" />
									<p className="w-5/6">
										Jalan Indonesia Raya Kec. Indo Kel. Ind 76123
									</p>
								</div>
								<div className="flex items-center">
									<MdEmail className="mr-4" />
									<p className="w-5/6">ko@.id</p>
								</div>
								<div className="flex items-center">
									<FaPhoneAlt className="mr-4" />
									<p className="w-5/6">0812 3456 7890</p>
								</div>
								<div className="mt-4">
									<h1 className="font-bold mb-2">Ikuti Kami</h1>
									<div className="flex gap-4">
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
					</div>{' '}
				</div>
			</main>
			<footer className="flex justify-center text-center my-auto py-8 items-center font-bold">
				© Copyright kasironline.com. All Rights Reserved Designed by Ilham -
				Diqi - Fatikhah
			</footer>
		</div>
	);
}

export default LandingAbout;
