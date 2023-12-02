import { Link } from 'react-router-dom';
import BarChart from '../../components/bar-chart-admin';
import NavbarAdmin from '../../components/navbar-admin';

function AdminCashflow() {
	return (
		<div className="relative items-center w-full h-screen bg-[#F2F4F9] pt-24">
			<NavbarAdmin />
			<div className='flex h-auto w-full justify-center'>
				<div className='h-auto w-fit bg-[#F2F4F9]'>
					<div className='h-auto w-full ld:w-[800px] bg-white border border-gray-400 rounded-lg'>
						<div className='w-full bg-white pt-3 pl-2 md:pt-6 md:pl-6 rounded-t-lg '>
							<div className='bg-red-500 rounded-lg hover:bg-red-600 w-fit'>
								<Link to={'/admin-dashboard'} className='flex items-center px-4 py-2 sm:py-1 rounded-lg text-white space-x-2'>
									<svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M13.583 1.91667C13.5833 1.61253 13.4885 1.31592 13.3118 1.06834C13.1352 0.820763 12.8856 0.634608 12.5979 0.535928C12.3102 0.437248 11.9989 0.43098 11.7074 0.518003C11.416 0.605025 11.1591 0.780983 10.9726 1.02125L0.764293 14.1462C0.565151 14.4022 0.457031 14.7173 0.457031 15.0417C0.457031 15.366 0.565151 15.6811 0.764293 15.9371L10.9726 29.0621C11.1591 29.3024 11.416 29.4783 11.7074 29.5653C11.9989 29.6524 12.3102 29.6461 12.5979 29.5474C12.8856 29.4487 13.1352 29.2626 13.3118 29.015C13.4885 28.7674 13.5833 28.4708 13.583 28.1667V22.3479C21.4274 22.5113 25.1958 24.0002 27.0887 25.619C28.8883 27.1575 29.2178 28.9673 29.5605 30.8631L29.6495 31.3517C29.7149 31.7012 29.9059 32.0149 30.1864 32.2335C30.4669 32.4521 30.8176 32.5608 31.1726 32.5389C31.5276 32.517 31.8623 32.3662 32.1139 32.1148C32.3654 31.8634 32.5164 31.5287 32.5385 31.1738C32.7878 27.1663 32.413 21.3592 29.5824 16.5015C26.8349 11.7867 21.8883 8.16125 13.583 7.78208V1.91667Z" fill="currentColor" />
									</svg>
									<p className='font-bold hidden sm:flex'>Kembali</p>
								</Link>
							</div>
						</div>
						<BarChart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminCashflow;
