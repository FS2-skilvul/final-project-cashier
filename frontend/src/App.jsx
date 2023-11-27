import UserDashboard from "./pages/user-dashboard"
import AdminDashboard from "./pages/admin-dashboard"
import { Route, Routes } from 'react-router-dom';
import LandingHome from '../src/pages/landing/home';
import LandingFitur from '../src/pages/landing/fitur';
import LandingAbout from '../src/pages/landing/about';
import DashboardPage from './pages/dashboard';
import GudangPage from './pages/gudang';
import KasirPage from './pages/kasir';
import Login from './pages/login';
import Register from './pages/register';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingHome />} />
				<Route path="/fitur" element={<LandingFitur />} />
				<Route path="/about" element={<LandingAbout />} />
          
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
          
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />

				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/gudang" element={<GudangPage />} />
				<Route path="/kasir" element={<KasirPage />} />
			</Routes>
		</>
	);

}

export default App;
