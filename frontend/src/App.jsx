import { Route, Routes } from 'react-router-dom';
import LandingHome from '../src/pages/landing/home';
import Login from './pages/login';
import Register from './pages/register';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingHome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
