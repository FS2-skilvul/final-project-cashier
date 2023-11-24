function NavbarLanding() {
	return (
		<header className="flex justify-between w-full h-full p-4 px-16 bg-white shadow font-bold  text-primary">
			<div className="flex">
				<img src="" alt="Logo Kasir Online" />
			</div>
			<div className="flex gap-6">
				<a href="">Home</a>
				<a href="">Fitur</a>
				<a href="">Tentang Kami</a>
			</div>
			<div className="flex gap-6">
				<button>Login</button>
				<button>Register</button>
			</div>
		</header>
	);
}

export default NavbarLanding;
