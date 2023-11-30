import { Route, Routes } from 'react-router-dom';
import AdminDashboardPage from './pages/admin/admin-dashboard';
import LandingHome from '../src/pages/landing/home';
import LandingFitur from '../src/pages/landing/fitur';
import LandingAbout from '../src/pages/landing/about';
import UserDashboardPage from './pages/user-dashboard';
import GudangPage from './pages/gudang';
import KasirPage from './pages/kasir';
import Login from './pages/login';
import Register from './pages/register';
import GudangTambah from './pages/gudang-tambah';
import GudangEdit from './pages/gudang-edit';
import ProfilePage from './pages/profil';
import AdminGudangPage from './pages/admin/admin-gudang';
import AdminTransaksiPage from './pages/admin/admin-transaksi';
import AdminCashflowPage from './pages/admin/admin-cashflow';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingHome />} />
				<Route path="/fitur" element={<LandingFitur />} />
				<Route path="/about" element={<LandingAbout />} />

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<ProfilePage />} />

				<Route path="/user-dashboard" element={<UserDashboardPage />} />
				<Route path="/gudang" element={<GudangPage />} />
				<Route path="/gudang/tambah" element={<GudangTambah />} />
				<Route path="/gudang/edit/:id" element={<GudangEdit />} />

				<Route path="/kasir" element={<KasirPage />} />

				<Route path="/admin-dashboard" element={<AdminDashboardPage />} />
				<Route path="/admin-dashboard/cashflow/:id" element={<AdminCashflowPage />}/>
				<Route path="/admin-dashboard/gudang/:id" element={<AdminGudangPage />} />
				<Route path="/admin-dashboard/transaksi/:id" element={<AdminTransaksiPage />}/>
			</Routes>
		</>
	);
}

export default App;
