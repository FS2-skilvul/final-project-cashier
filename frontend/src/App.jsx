import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
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
import LandingPage from '../src/pages/landing/landing';
// import ProtectedRouteAdmin from './routes/protected-admin-route';
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { getDataUser } from './redux/reducers/user-reducers';
import { useEffect, useState } from 'react';

function App() {
	const { userSelf, isLoading } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	let token = localStorage.getItem('token');
	const [roleUser, setRoleUser] = useState(token ? jwtDecode(token).role : '');

	// useEffect(() => {
	// 	if (token) {
	// 		dispatch(getDataUser())
	// 	}
	// }, [dispatch, token])

	useEffect(() => {
		if (token) {
			setRoleUser(jwtDecode(token).role)
		}
	}, [token])

	console.log(roleUser)

	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/fitur" element={<LandingFitur />} />
				<Route path="/about" element={<LandingAbout />} />

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				{/* USER */}
				{/* <Route path="/profile" element={<ProfilePage />} /> */}
				<Route path="/profile" element=
					{token ?
						(roleUser === "user" ? <ProfilePage /> : <Navigate to={"/admin-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				{/* <Route path="/user-dashboard" element={<UserDashboardPage />} /> */}
				<Route path="/user-dashboard" element=
					{token ?
						(roleUser === "user" ? <UserDashboardPage /> : <Navigate to={"/admin-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				{/* <Route path="/gudang" element={<GudangPage />} /> */}
				<Route path="/gudang" element=
					{token ?
						(roleUser === "user" ? <GudangPage /> : <Navigate to={"/admin-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				{/* <Route path="/gudang/tambah" element={<GudangTambah />} /> */}
				<Route path="/gudang/tambah" element=
					{token ?
						(roleUser === "user" ? <GudangTambah /> : <Navigate to={"/admin-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				{/* <Route path="/gudang/edit/:id" element={<GudangEdit />} /> */}
				<Route path="/gudang/edit/:id" element=
					{token ?
						(roleUser === "user" ? <GudangEdit /> : <Navigate to={"/admin-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>

				{/* <Route path="/kasir" element={<KasirPage />} /> */}
				<Route path="/kasir" element=
					{token ?
						(roleUser === "user" ? <KasirPage /> : <Navigate to={"/admin-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>

				{/* ADMIN */}
				<Route path="/admin-dashboard" element=
					{token ?
						(roleUser === "admin" ? <AdminDashboardPage /> : <Navigate to={"/user-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				<Route path="/admin-dashboard/cashflow/:id" element=
					{token ?
						(roleUser == "admin" ? <AdminCashflowPage /> : <Navigate to={"/user-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				<Route path="/admin-dashboard/gudang/:id" element=
					{token ?
						(roleUser == "admin" ? <AdminGudangPage /> : <Navigate to={"/user-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				<Route path="/admin-dashboard/transaksi/:id" element=
					{token ?
						(roleUser == "admin" ? <AdminTransaksiPage /> : <Navigate to={"/user-dashboard"} />)
						:
						<Navigate to={"/login"} />}
				/>
				{/* <Route path="/admin-dashboard/cashflow/:id" element={<AdminCashflowPage />} />
				<Route path="/admin-dashboard/gudang/:id" element={<AdminGudangPage />} />
				<Route path="/admin-dashboard/transaksi/:id" element={<AdminTransaksiPage />} /> */}
				<Route path="/*" element=
					{token ?
						(roleUser == "admin" ? <AdminTransaksiPage /> : (roleUser == "user" ?  <Navigate to={"/user-dashboard"} /> : <Navigate to={"/login"} /> ))
						:
						<Navigate to={"/login"} />}
				/>
			</Routes>
		</>
	);
}

export default App;
