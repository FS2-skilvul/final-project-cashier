import logoBiru from '../assets/Logo Biru.png';
import { Link, useLocation } from 'react-router-dom';
import {
	IoIosArrowDown,
	IoMdPerson,
	IoIosArrowForward,
	IoIosLogOut,
} from 'react-icons/io';
import { useState } from 'react';

function NavbarHome() {
	const [toogle, setToogle] = useState(false);
	const location = useLocation();
	const isActivePage = (pathname) => location.pathname === pathname;

	function toogleButton() {
		setToogle(!toogle);
	}

	return (
		<header className="fixed z-50 flex justify-between w-full p-4 px-16 bg-white shadow top-0 items-center text-xl">
			<div className="flex gap-6 font-bold items-center justify-center">
				<Link to="/user-dashboard">
					<img src={logoBiru} alt="Logo Kasir Online" />
				</Link>
				<div className="flex mx-24 gap-6 text-isPasif">
					<Link to="/user-dashboard">
						<button
							className={`flex gap-4 ${
								isActivePage('/user-dashboard')
									? 'text-blue-500 fill-blue-500'
									: 'text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500'
							}`}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M13.25 0.75V8.25H23.25V0.75M13.25 23.25H23.25V10.75H13.25M0.75 23.25H10.75V15.75H0.75M0.75 13.25H10.75V0.75H0.75V13.25Z" />
							</svg>
							Dashboard
						</button>
					</Link>
					<Link to={'/gudang'}>
						<button
							className={`flex gap-4 ${
								isActivePage('/gudang') ||
								isActivePage('/gudang/tambah') ||
								isActivePage('/gudang/edit')
									? 'text-blue-500 fill-blue-500'
									: 'text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500'
							}`}
						>
							<svg
								width="28"
								height="28"
								viewBox="0 0 28 28"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_232_4050)">
									<path d="M28 7L13.895 0L0 7V8.75H1.75V28H5.25V12.25H22.75V28H26.25V8.75H28V7ZM7 10.5V8.75H10.5V10.5H7ZM12.25 10.5V8.75H15.75V10.5H12.25ZM17.5 10.5V8.75H21V10.5H17.5Z" />
									<path d="M10.5 15.75H8.75V14H7V19.25H12.25V14H10.5V15.75ZM10.5 22.75H8.75V21H7V26.25H12.25V21H10.5V22.75ZM17.5 22.75H15.75V21H14V26.25H19.25V21H17.5V22.75Z" />
								</g>
								<defs>
									<clipPath id="clip0_232_4050">
										<rect width="28" height="28" fill="white" />
									</clipPath>
								</defs>
							</svg>
							Gudang
						</button>
					</Link>
					<Link to="/kasir">
						<button
							className={`flex gap-4 ${
								isActivePage('/kasir')
									? 'text-blue-500 fill-blue-500'
									: 'text-gray-500 fill-gray-500 hover:text-blue-500 hover:fill-blue-500'
							}`}
						>
							<svg
								width="26"
								height="26"
								viewBox="0 0 26 26"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12.4251 0.261039C12.2556 0.430401 12.1815 1.5064 12.1815 3.79613C12.1815 6.51787 12.2367 7.14279 12.5005 7.40646C12.7589 7.66446 13.3381 7.72511 15.5458 7.72511H18.2723V8.43014V9.13517L14.8716 9.19074L11.4709 9.24632L11.4145 12.1642C11.3615 14.8999 11.3836 15.1001 11.7698 15.3703C12.231 15.693 12.3056 16.2416 11.9379 16.609C11.7649 16.7818 10.5335 16.8524 7.68876 16.8524C4.31834 16.8524 3.63293 16.8019 3.36433 16.5337C2.94468 16.1143 2.96193 15.9056 3.45143 15.4869C3.82357 15.1687 3.85748 14.8886 3.85748 12.1423V9.1449H2.96863C2.41275 9.1449 1.98193 9.26295 1.81809 9.4601C1.60654 9.71485 0.216628 17.0931 0.205867 18.0186C0.203634 18.2188 2.89493 18.2722 12.9936 18.2722C23.0923 18.2722 25.7836 18.2188 25.7813 18.0186C25.7706 17.0931 24.3807 9.71485 24.1691 9.4601C23.9647 9.21407 23.4675 9.1449 21.9019 9.1449H19.8965V8.435V7.72511H22.6982C24.6066 7.72511 25.5777 7.64742 25.7436 7.48171C26.0855 7.14015 26.0855 0.602602 25.7436 0.261039C25.3952 -0.0870132 12.7735 -0.0870132 12.4251 0.261039ZM19.5775 3.37871C19.7529 3.55415 19.8965 3.77584 19.8965 3.87138C19.8965 4.09672 19.3099 4.68269 19.0844 4.68269C18.8588 4.68269 18.2723 4.09672 18.2723 3.87138C18.2723 3.64603 18.8588 3.06006 19.0844 3.06006C19.18 3.06006 19.4019 3.20346 19.5775 3.37871ZM22.6229 3.37871C22.7983 3.55415 22.9418 3.77584 22.9418 3.87138C22.9418 4.09672 22.3553 4.68269 22.1297 4.68269C21.9042 4.68269 21.3176 4.09672 21.3176 3.87138C21.3176 3.64603 21.9042 3.06006 22.1297 3.06006C22.2254 3.06006 22.4473 3.20346 22.6229 3.37871ZM5.59476 6.55337C5.33387 6.92536 5.27865 7.72267 5.27865 11.117V15.2297H7.61344H9.94823V10.9095C9.94823 7.81983 9.87879 6.5199 9.7046 6.34588C9.55233 6.19376 8.79586 6.10248 7.68592 6.10248C6.08162 6.10248 5.88042 6.14589 5.59476 6.55337ZM16.5321 12.506C17.2119 13.1852 16.5989 13.8099 15.2531 13.8099C14.725 13.8099 14.1833 13.7004 14.0493 13.5665C13.7375 13.255 13.7375 12.7423 14.0493 12.4307C14.4095 12.0709 16.1492 12.1236 16.5321 12.506ZM21.1942 12.6437C21.5856 13.2672 21.1067 13.7004 19.9507 13.769C18.9711 13.827 18.2723 13.5063 18.2723 12.9986C18.2723 12.9031 18.4203 12.6769 18.6012 12.4962C19.0559 12.0419 20.8813 12.1457 21.1942 12.6437ZM16.5321 15.5484C17.2119 16.2276 16.5989 16.8524 15.2531 16.8524C14.725 16.8524 14.1833 16.7428 14.0493 16.609C13.7375 16.2974 13.7375 15.7847 14.0493 15.4731C14.4095 15.1133 16.1492 15.166 16.5321 15.5484ZM21.1942 15.6861C21.5856 16.3096 21.1067 16.7428 19.9507 16.8114C18.9711 16.8694 18.2723 16.5487 18.2723 16.041C18.2723 15.9455 18.4203 15.7194 18.6012 15.5386C19.0559 15.0843 20.8813 15.1882 21.1942 15.6861ZM0 22.6938C0 24.6004 0.0777586 25.5705 0.24363 25.7362C0.595676 26.0879 25.3915 26.0879 25.7436 25.7362C25.9095 25.5705 25.9872 24.6004 25.9872 22.6938V19.8948H12.9936H0V22.6938ZM14.9833 22.3693C15.3923 22.778 15.2606 23.3402 14.7061 23.5508C14.4197 23.6595 13.649 23.7485 12.9936 23.7485C11.5428 23.7485 10.7603 23.4802 10.7603 22.9828C10.7603 22.2904 11.1889 22.1259 12.9936 22.1259C14.081 22.1259 14.8316 22.2178 14.9833 22.3693Z"
								/>
							</svg>
							Kasir
						</button>
					</Link>
				</div>
			</div>
			<div className="flex gap-2 font-semibold text-base items-center justify-center text-primary">
				<img
					src="https://c.pxhere.com/images/0d/18/4fa31701d2cfa087836d807967f3-1447663.jpg!d"
					alt=""
					className="border rounded-full w-10 border-primary"
				/>
				<p>Ilham Rahmaddani</p>
				<div className="relative">
					<button onClick={toogleButton}>
						{toogle && true ? <IoIosArrowForward /> : <IoIosArrowDown />}
					</button>
					{toogle && (
						<div className="flex flex-col absolute top-[4rem] right-2">
							<button className="bg-white border px-12 py-1">
								<Link to="/profile">
									<div className="flex flex-row items-center justify-center gap-2">
										<IoMdPerson />
										Profile
									</div>
								</Link>
							</button>
							<button className='"bg-white border px-12 py-1'>
								<Link to="/profile">
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

export default NavbarHome;
