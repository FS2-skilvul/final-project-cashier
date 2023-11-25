import logoBiru from '../assets/Logo Biru.png';

function NavbarLanding() {
	return (
		<header className="flex justify-between w-full h-full p-4 px-16 bg-white shadow  text-primary top-0 items-center text-xl">
			<div className="flex font-bold">
				<a href="/">
					<img src={logoBiru} alt="Logo Kasir Online" />
				</a>
			</div>
			<div className="flex gap-6 font-bold">
				<a href="/">Home</a>
				<a href="/fitur">Fitur</a>
				<a href="/about">Tentang Kami</a>
			</div>
			<div className="flex gap-2 font-semibold text-base">
				<a
					href="/login"
					className="border border-primary rounded-full p-1 px-4"
				>
					Login
				</a>
				<a
					href="/register"
					className=" bg-primary text-secondary rounded-full p-1 px-4"
				>
					Register
				</a>
			</div>
		</header>
	);
}

export default NavbarLanding;
