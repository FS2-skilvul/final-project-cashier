import logoBiru from '../assets/Logo Biru.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
	IoIosArrowDown,
	IoMdPerson,
	IoIosArrowForward,
	IoIosLogOut,
} from 'react-icons/io';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaStore } from 'react-icons/fa';

function NavbarAdmin() {
	const [toogle, setToogle] = useState(false);
	const location = useLocation();
	const isActivePage = (pathname) => location.pathname === pathname;
	const { id } = useParams();
	// const { users, isLoading } = useSelector((state) => state.user);

	const users = {
		nama: 'Haloowdqwdqwdqw',
		toko: 'lalalala',
	};

	function toogleButton() {
		setToogle(!toogle);
	}

	return (
		<header className="fixed flex justify-between w-full p-4 px-16 bg-white shadow top-0 items-center text-xl z-50">
			<div className="flex gap-6 font-bold items-center justify-center">
				{isActivePage('/admin-dashboard') ? (
					<Link to="/admin-dashboard">
						<img src={logoBiru} alt="Logo Kasir Online" />
					</Link>
				) : (
					<div className="flex text-primary gap-20">
						{users.nama && (
							<div className="flex gap-3">
								<svg
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.5 0C14.1576 0 15.7473 0.65848 16.9194 1.83058C18.0915 3.00268 18.75 4.5924 18.75 6.25C18.75 7.9076 18.0915 9.49732 16.9194 10.6694C15.7473 11.8415 14.1576 12.5 12.5 12.5C10.8424 12.5 9.25268 11.8415 8.08058 10.6694C6.90848 9.49732 6.25 7.9076 6.25 6.25C6.25 4.5924 6.90848 3.00268 8.08058 1.83058C9.25268 0.65848 10.8424 0 12.5 0ZM12.5 15.625C19.4063 15.625 25 18.4219 25 21.875V25H0V21.875C0 18.4219 5.59375 15.625 12.5 15.625Z"
										fill="#5371FF"
									/>
								</svg>
								{users.nama}
							</div>
						)}
						{users.nama && (
							<div className="flex gap-3">
								<svg
									width="29"
									height="25"
									viewBox="0 0 29 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.16667 3.24999V0.166656H26.8333V3.24999H2.16667ZM2.16667 24.8333V15.5833H0.625V12.5L2.16667 4.79166H26.8333L28.375 12.5V15.5833H26.8333V24.8333H23.75V15.5833H17.5833V24.8333H2.16667ZM5.25 21.75H14.5V15.5833H5.25V21.75Z"
										fill="#5371FF"
									/>
								</svg>

								{users.toko}
							</div>
						)}
						<div className="flex  text-primary"></div>
					</div>
				)}
			</div>
			<div className="flex gap-2 font-semibold text-base items-center justify-center text-primary">
				<img
					src="https://c.pxhere.com/images/0d/18/4fa31701d2cfa087836d807967f3-1447663.jpg!d"
					alt=""
					className="border rounded-full w-10 border-primary"
				/>
				<p>Admin</p>
				<div className="relative">
					<button onClick={toogleButton}>
						{toogle && true ? <IoIosArrowForward /> : <IoIosArrowDown />}
					</button>
					{toogle && (
						<div className="flex flex-col fixed top-[6.5em] right-[1em]">
							<button className='"bg-white border px-8 py-1'>
								<Link to="/">
									<div className="flex flex-row items-center justify-center gap-2">
										<IoIosLogOut />
										Keluar
									</div>
								</Link>
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default NavbarAdmin;
