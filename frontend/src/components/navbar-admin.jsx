import logoBiru from '../assets/Logo Biru.png';
import logoBiruKecil from '../assets/Vector (2).png';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataUser } from '../redux/reducers/user-reducers';
import {
	IoIosArrowDown,
	IoMdPerson,
	IoIosArrowForward,
	IoIosLogOut,
	IoMdClose,
	IoMdMenu,
} from 'react-icons/io';
import { useState, useEffect } from 'react';

// import { useSelector } from 'react-redux';
// import { FaStore } from 'react-icons/fa';

function NavbarAdmin() {
	const [toogle, setToogle] = useState(false);
	const [menu, setMenu] = useState(false);
	const location = useLocation();
	const dispatch = useDispatch();
	const isActivePage = (pathname) => location.pathname === pathname;

	const navigate = useNavigate();
	const { id } = useParams();
	const { users } = useSelector((state) => state.user);
	console.log(users);
	let User = users.find((user) => user.id === id);
	console.log(User);

	// useEffect(() => {
	// 	dispatch(getAllDataUser());
	// }, [dispatch]);

	function menuButton() {
		setMenu(!menu);
	}

	// useEffect(() => {
	// 	if (id) {
	// 		try {
	// 			dispatch(getAllDataUser(id));
	// 		} catch (error) {
	// 			// Tangani kesalahan jika ada
	// 			console.error('Error adding user:', error);

	// 			// Dapatkan status code dari error (jika ada)
	// 			const statusCode = error.response ? error.response.status : null;

	// 			// Dapatkan pesan kesalahan dari error (jika ada)
	// 			const errorMessage = error.response
	// 				? error.response.data.message
	// 				: null;

	// 			// Log status code dan pesan kesalahan
	// 			console.log('Status Code:', statusCode);
	// 			console.log('Error Message:', errorMessage);
	// 			navigate('/admin-dashboard');
	// 		}
	// 	} else {
	// 		navigate('/admin-dashboard');
	// 	}
	// }, [dispatch, id]);

	// const user = users.map((item) => ({
	// 	key: item.id,
	// 	nama: item.nama,
	// 	toko: item.nama_toko,
	// }));

	// console.log(user.key);

	function toogleButton() {
		setToogle(!toogle);
	}

	return (
		<header className="fixed flex justify-between w-full p-5 px-4 md:px-8 lg:px-12 xl:px-24 bg-white shadow top-0 items-center text-sm md:text-xl z-10">
			<div className="flex gap-6 font-bold items-center justify-center">
				{menu && (
					<div className="fixed md:hidden flex">
						<div className="opacity-95 right-0 fixed top-[4.5rem] bg-white w-1/2 h-full">
							<div className="flex flex-col items-center h-full ">
								<div className="flex flex-col font-semibold text-base items-center justify-center text-primary mt-12">
									<img
										src="https://c.pxhere.com/images/0d/18/4fa31701d2cfa087836d807967f3-1447663.jpg!d"
										alt=""
										className="border rounded-full w-10 border-primary "
									/>
									<p className="text-xl mt-2">Administrator</p>{' '}
								</div>
								<div className="relative ">
									<div className="flex flex-col top-[6.5em] right-[1em] items-end text-primary">
										<button className="">
											<Link to="/profile">
												<div className="flex flex-row items-center justify-center gap-2">
													<IoMdPerson />
													Profile
												</div>
											</Link>
										</button>
									</div>
								</div>
								<button className="flex flex-1 items-end mb-24 text-primary bottom-0">
									<Link to="/">
										<div className="flex flex-row items-center justify-center gap-2 text-sm">
											<IoIosLogOut />
											Keluar
										</div>
									</Link>
								</button>
							</div>
						</div>
					</div>
				)}
				{isActivePage('/admin-dashboard') ? (
					<Link to="/admin-dashboard">
						<img src={logoBiru} alt="Logo Kasir Online" className="flex w-36" />
					</Link>
				) : (
					<div className="flex text-primary md:gap-20 gap-2 ">
						<div className="flex gap-3 items-center">
							<svg
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
							>
								<path
									d="M12.5 0C14.1576 0 15.7473 0.65848 16.9194 1.83058C18.0915 3.00268 18.75 4.5924 18.75 6.25C18.75 7.9076 18.0915 9.49732 16.9194 10.6694C15.7473 11.8415 14.1576 12.5 12.5 12.5C10.8424 12.5 9.25268 11.8415 8.08058 10.6694C6.90848 9.49732 6.25 7.9076 6.25 6.25C6.25 4.5924 6.90848 3.00268 8.08058 1.83058C9.25268 0.65848 10.8424 0 12.5 0ZM12.5 15.625C19.4063 15.625 25 18.4219 25 21.875V25H0V21.875C0 18.4219 5.59375 15.625 12.5 15.625Z"
									fill="#5371FF"
								/>
							</svg>
							{/* {user.nama} */}
						</div>
						<div className="flex gap-3 items-center">
							<svg
								viewBox="0 0 29 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
							>
								<path
									d="M2.16667 3.24999V0.166656H26.8333V3.24999H2.16667ZM2.16667 24.8333V15.5833H0.625V12.5L2.16667 4.79166H26.8333L28.375 12.5V15.5833H26.8333V24.8333H23.75V15.5833H17.5833V24.8333H2.16667ZM5.25 21.75H14.5V15.5833H5.25V21.75Z"
									fill="#5371FF"
								/>
							</svg>
							{/* {user.toko} */}
						</div>
						<div className="flex  text-primary"></div>
					</div>
				)}
			</div>
			<div className="hidden gap-2 font-semibold text-base items-center justify-center text-primary md:flex">
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
						<div className="flex flex-col fixed top-[5em] right-[2em] xl:right-[5rem]">
							<button className="bg-white border px-8 py-1">
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
			<button
				onClick={menuButton}
				className={`flex items-center justify-center md:hidden text-primary text-3xl transition-transform transform ${
					menu ? 'rotate-180' : 'rotate-0'
				}`}
			>
				{menu ? <IoMdClose /> : <IoMdMenu />}
			</button>
		</header>
	);
}
export default NavbarAdmin;
