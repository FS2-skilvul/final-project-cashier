function NavbarLanding() {
	return (
		<header className="flex justify-between w-full h-full p-4 px-16 bg-white shadow font-bold  text-primary">
			<div className="flex">
				<img src="" alt="Logo Kasir Online" />
			</div>
			<div className="flex gap-6">
				<a href="/">Home</a>
				<a href="/fitur">Fitur</a>
				<a href="/about">Tentang Kami</a>
			</div>
			<div className="flex gap-6">
				<a href="/login">Login</a>
				<a href="/register">Register</a>
			</div>
		</header>
	);
}

export default NavbarLanding;
