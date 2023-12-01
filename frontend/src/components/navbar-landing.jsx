import { Link } from 'react-router-dom';
import logoBiru from '../assets/Logo Biru.png';

function NavbarLanding() {
	return (
		<header className="flex py-4 px-6 sm:px-12 lg:px-16 w-screen bg-white shadow  text-primary fixed top-0 justify-between gap-2 z-10">
			<div className="flex font-bold items-center">
				<a href="/">
					<img src={logoBiru} alt="Logo Kasir Online" className="w-32" />
				</a>
			</div>
			<div className="gap-6 font-bold hidden md:flex items-center">
				<Link to="/">
					<div className="flex gap-4">Home</div>
				</Link>
				<Link to="/fitur">
					<div className="flex gap-4">Fitur</div>
				</Link>
				<Link to="/about">
					<div className="flex gap-4">Tentang Kami</div>
				</Link>
			</div>
			<div className="gap-2 font-semibold text-base flex">
				<a
					href="/login"
					className="border border-primary rounded-full py-1 px-6 self-center"
				>
					Login
				</a>
				<a
					href="/register"
					className=" bg-primary text-secondary rounded-full py-1 px-4 self-center"
				>
					Register
				</a>
			</div>
		</header>
	);
}

export default NavbarLanding;
